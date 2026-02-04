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
  const { addCoins, activeCoinSkin } = useGameStore();
  const [entities, setEntities] = useState([]);
  const requestRef = useRef();
  const audioRef = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Obtener recursos actuales basados en la skin
  const currentSkin = SKINS[activeCoinSkin] || SKINS["dase"];

  // Inicializar audio
  useEffect(() => {
    if (currentSkin.sound) {
      audioRef.current = new Audio(currentSkin.sound);
      audioRef.current.volume = 0.4;
    }
  }, [currentSkin]);

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

    requestRef.current = requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [update]);

  const handleCoinClick = (entity) => {
    addCoins(entity.value);

    if (entity.type === "shiny" && audioRef.current) {
      const soundClone = audioRef.current.cloneNode();
      soundClone.volume = 0.4;
      soundClone.play().catch((e) => console.log("Audio error:", e));
    }

    // 3. Desaparecer la moneda temporalmente (eliminar del array)
    setEntities((prev) => prev.filter((e) => e.id !== entity.id));

    // 4. Reaparecer (Respawn) después de 2 segundos
    setTimeout(() => {
      if (!isMounted.current) return;

      setEntities((prev) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const newEntity = {
          ...entity,
          // Generamos un ID único para forzar a React a renderizarlo de nuevo
          id: `${entity.type}-${Date.now()}-${Math.random()}`,
          x: Math.random() * (width - COIN_SIZE),
          y: Math.random() * (height - COIN_SIZE),
          // Cambiamos ligeramente la dirección al azar
          vx: (Math.random() - 0.5) * (entity.type === "shiny" ? 12 : 8),
          vy: (Math.random() - 0.5) * (entity.type === "shiny" ? 12 : 8),
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
