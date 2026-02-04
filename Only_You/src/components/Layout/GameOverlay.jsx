import React, { useEffect, useRef, useState, useCallback } from "react";
import { useGameStore } from "../../store/useStore";

// Imágenes
import daseImg from "../../assets/coin/coin_img/dase.png";
import daseShinyImg from "../../assets/coin/coin_img/daseshiny.png";

// Sonidos (Asegúrate de tener este archivo o comenta la línea si no lo tienes aún)
import daseSoundMp3 from "../../assets/coin/coin_sounds/dase.mp3";

const COIN_SIZE = 80; // Tamaño en px

// Configuración de Skins
const SKINS = {
  dase: {
    normal: daseImg,
    shiny: daseShinyImg,
    sound: daseSoundMp3,
  },
};

export default function GameOverlay() {
  const { addCoins, activeCoinSkin, gameVolume, unlockAchievement, coins } =
    useGameStore();
  const [entities, setEntities] = useState([]);
  const [particles, setParticles] = useState([]);
  const [combo, setCombo] = useState(1);
  const requestRef = useRef();
  const audioRef = useRef(null);
  const isMounted = useRef(false);
  const comboTimeoutRef = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);
    };
  }, []);

  // Obtener recursos actuales basados en la skin
  const currentSkin = SKINS[activeCoinSkin] || SKINS["dase"];

  // Inicializar audio
  useEffect(() => {
    if (currentSkin.sound) {
      audioRef.current = new Audio(currentSkin.sound);
      audioRef.current.volume = gameVolume;
    }
  }, [currentSkin, gameVolume]);

  // --- ADMIN CHEAT: Ctrl + Alt + K (Koins) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && (e.key === "k" || e.key === "K")) {
        addCoins(1000000);
        unlockAchievement("hacker"); // LOGRO HACKER
        console.log("CHEAT ACTIVATED: +1,000,000 Coins");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [addCoins, unlockAchievement]);

  // Inicializar monedas
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newEntities = [];

    // 5 Monedas Normales (Valen 1)
    for (let i = 0; i < 5; i++) {
      newEntities.push({
        id: `normal-${i}`,
        type: "normal",
        x: Math.random() * (width - COIN_SIZE),
        y: Math.random() * (height - COIN_SIZE),
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        img: currentSkin.normal,
        value: 1,
      });
    }

    // 1 Moneda Especial (Vale 5)
    newEntities.push({
      id: `shiny-1`,
      type: "shiny",
      x: Math.random() * (width - COIN_SIZE),
      y: Math.random() * (height - COIN_SIZE),
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      img: currentSkin.shiny,
      value: 5,
    });

    setEntities(newEntities);
  }, [activeCoinSkin, currentSkin]);

  // Bucle de animación
  const update = useCallback(() => {
    setEntities((prev) =>
      prev.map((entity) => {
        let { x, y, vx, vy } = entity;

        x += vx;
        y += vy;

        // Rebote en los bordes
        if (x <= 0 || x >= window.innerWidth - COIN_SIZE) {
          vx = -vx;
          x = Math.max(0, Math.min(x, window.innerWidth - COIN_SIZE));
        }
        if (y <= 0 || y >= window.innerHeight - COIN_SIZE) {
          vy = -vy;
          y = Math.max(0, Math.min(y, window.innerHeight - COIN_SIZE));
        }

        return { ...entity, x, y, vx, vy };
      }),
    );

    // Actualizar partículas
    setParticles((prev) => {
      if (prev.length === 0) return prev;
      return prev
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.5, // Gravedad
          life: p.life - 0.03, // Desvanecimiento
        }))
        .filter((p) => p.life > 0);
    });

    requestRef.current = requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [update]);

  const handleCoinClick = (entity) => {
    // --- SISTEMA DE COMBO ---
    let nextCombo = combo + 1;
    if (nextCombo > 10) nextCombo = 10; // Máximo x10
    setCombo(nextCombo);

    // Reiniciar temporizador del combo
    if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);

    // Dificultad: Menos tiempo para mantener el combo cuanto más alto sea (Min 0.5s)
    const timeWindow = Math.max(500, 2500 - nextCombo * 200);

    comboTimeoutRef.current = setTimeout(() => {
      if (isMounted.current) setCombo(1);
    }, timeWindow);

    // Puntos con multiplicador
    const earned = entity.value * nextCombo;
    addCoins(earned);

    // --- CHEQUEO DE LOGROS ---
    unlockAchievement("first_coin"); // Primer logro siempre
    if (nextCombo >= 5) unlockAchievement("combo_5");
    if (nextCombo >= 10) unlockAchievement("velocista");

    if (entity.type === "shiny") unlockAchievement("shiny_hunter");

    const currentTotal = coins + earned; // Calculamos el total actual
    if (currentTotal >= 100) unlockAchievement("rico");
    if (currentTotal >= 500) unlockAchievement("half_k");
    if (currentTotal >= 1000) unlockAchievement("millonario");

    if (entity.type === "shiny" && audioRef.current) {
      const soundClone = audioRef.current.cloneNode();
      soundClone.volume = gameVolume;
      soundClone.play().catch((e) => console.log("Audio error:", e));
    }

    // Generar partículas
    const newParticles = [];
    const pColor = entity.type === "shiny" ? "#ffd700" : "#ffffff";
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: `${Date.now()}-${i}-${Math.random()}`,
        x: entity.x + COIN_SIZE / 2,
        y: entity.y + COIN_SIZE / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15,
        life: 1.0,
        color: pColor,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);

    // 3. Desaparecer la moneda temporalmente (eliminar del array)
    setEntities((prev) => prev.filter((e) => e.id !== entity.id));

    // 4. Reaparecer (Respawn) después de 2 segundos
    setTimeout(() => {
      if (!isMounted.current) return;

      setEntities((prev) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Dificultad: Velocidad aumenta con el combo (+15% por nivel)
        const speedMultiplier = 1 + nextCombo * 0.15;

        const newEntity = {
          ...entity,
          // Generamos un ID único para forzar a React a renderizarlo de nuevo
          id: `${entity.type}-${Date.now()}-${Math.random()}`,
          x: Math.random() * (width - COIN_SIZE),
          y: Math.random() * (height - COIN_SIZE),
          // Cambiamos ligeramente la dirección al azar y aplicamos multiplicador de velocidad
          vx:
            (Math.random() - 0.5) *
            (entity.type === "shiny" ? 12 : 8) *
            speedMultiplier,
          vy:
            (Math.random() - 0.5) *
            (entity.type === "shiny" ? 12 : 8) *
            speedMultiplier,
        };
        return [...prev, newEntity];
      });
    }, 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 30, // Bajamos a 30 para que la Tienda (z-40) se vea encima
        pointerEvents: "auto",
        overflow: "hidden",
      }}>
      {/* --- COMBO UI --- */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "40px",
          pointerEvents: "none",
          textAlign: "right",
          zIndex: 100,
        }}>
        {combo > 1 && (
          <div
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "3rem",
              fontWeight: "900",
              color: "#f700ff",
              textShadow: "0 0 20px rgba(247, 0, 255, 0.8)",
              transform: `scale(${1 + combo * 0.1})`,
              transition:
                "transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}>
            x{combo}
          </div>
        )}
      </div>

      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: "8px",
            height: "8px",
            backgroundColor: p.color,
            borderRadius: "50%",
            opacity: p.life,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}
      {entities.map((entity) => (
        <img
          key={entity.id}
          src={entity.img}
          alt="coin"
          onMouseDown={(e) => {
            e.stopPropagation();
            handleCoinClick(entity);
          }}
          style={{
            position: "absolute",
            transform: `translate3d(${entity.x}px, ${entity.y}px, 0)`,
            width: COIN_SIZE,
            height: COIN_SIZE,
            objectFit: "contain", // Mantiene la proporción original (rectangular) sin deformar
            cursor: "pointer",
            userSelect: "none",
            filter:
              entity.type === "shiny"
                ? "drop-shadow(0 0 15px gold) brightness(1.2)"
                : "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
