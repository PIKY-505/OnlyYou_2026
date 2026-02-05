import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useGameStore } from "../../store/useStore";
import "../../styles/Cursor.scss";
import {
  FiMousePointer,
  FiZap,
  FiDisc,
  FiCrosshair,
  FiDroplet,
  FiMaximize,
} from "react-icons/fi";
import TargetCursor from "./TargetCursor";
import SplashCursor from "./SplashCursor";
import Crosshair from "./Crosshair";

// Configuración de los cursores
export const CURSOR_CONFIG = {
  // ID del item en la tienda : Configuración
  cursor_neon: {
    name: "Neon Pulse",
    price: 500,
    desc: "Estilo Cyberpunk. Cambia de color.",
    icon: <FiMousePointer />,
    type: "replace", // Oculta el nativo
    className: "cursor-neon",
  },
  cursor_gold: {
    name: "Gold Sparkle",
    price: 1000,
    desc: "Cursor de oro puro con rastro brillante.",
    icon: <FiZap />,
    type: "replace", // AHORA REEMPLAZA AL ORIGINAL
    className: "cursor-gold",
    effect: "sparkle",
  },
  cursor_ghost: {
    name: "Fantasma",
    price: 1500,
    desc: "Espíritu flotante con rastro.",
    icon: (
      <img
        src="https://freepngimg.com/download/mario/114725-mario-boo-super-bros-king.png"
        alt="ghost"
        style={{ width: "24px", height: "24px" }}
      />
    ),
    type: "replace",
    className: "cursor-ghost",
    effect: "ghost_trail",
  },
  cursor_blackhole: {
    name: "Agujero Negro",
    price: 2000,
    desc: "Singularidad que distorsiona la luz.",
    icon: <FiDisc />,
    type: "replace",
    className: "cursor-blackhole",
  },
  cursor_target: {
    name: "Target HUD",
    price: 5000,
    desc: "Sistema de fijación táctico.",
    icon: <FiCrosshair />,
    type: "custom", // Nuevo tipo para componentes completos
    component: TargetCursor,
  },
  cursor_splash: {
    name: "Splash Fluid",
    price: 8000,
    desc: "Tinta fluida reactiva.",
    icon: <FiDroplet />,
    type: "custom",
    component: SplashCursor,
    hideNative: false,
  },
  cursor_crosshair: {
    name: "Crosshair",
    price: 3000,
    desc: "Líneas de precisión con distorsión.",
    icon: <FiMaximize />,
    type: "custom",
    component: Crosshair,
  },
};

export default function CursorController() {
  // Asumimos que activeCursor existe en tu store (si no, añádelo)
  const { activeCursor } = useGameStore();
  const cursorRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();

  // 1. Lógica de seguimiento del ratón (Optimizada con Refs)
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;

      // Mover el cursor principal (si existe)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Generar efectos (Partículas / Rastros)
      const config = CURSOR_CONFIG[activeCursor];
      if (config?.effect) {
        // Efecto Sparkle (Oro)
        if (config.effect === "sparkle" && Math.random() > 0.7) {
          createParticle(clientX, clientY, "sparkle");
        }
        // Efecto Ghost (Rastro continuo)
        // Usamos un umbral más bajo para que el rastro sea más continuo
        if (config.effect === "ghost_trail" && Math.random() > 0.3) {
          createParticle(clientX, clientY, "ghost");
        }
      }
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [activeCursor]);

  // 2. Gestión de partículas
  const createParticle = (x, y, type) => {
    const id = Date.now() + Math.random();
    setParticles((prev) => [...prev, { id, x, y, type }]);
    // Auto-limpieza después de la animación (1s)
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1000);
  };

  // 3. Ocultar/Mostrar cursor nativo
  useEffect(() => {
    const config = CURSOR_CONFIG[activeCursor];
    if (
      config &&
      (config.type === "replace" || config.type === "custom") &&
      config.hideNative !== false
    ) {
      document.body.classList.add("hide-native-cursor");
    } else {
      document.body.classList.remove("hide-native-cursor");
    }
    return () => document.body.classList.remove("hide-native-cursor");
  }, [activeCursor]);

  // Si no hay cursor activo o es el default, no renderizamos nada (o solo partículas si quedan)
  const config = CURSOR_CONFIG[activeCursor];

  return ReactDOM.createPortal(
    <div className="cursor-overlay">
      {/* Renderizado de Partículas (Complemento) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={p.type === "ghost" ? "ghost-particle" : "sparkle-particle"}
          style={{ left: p.x, top: p.y }}
        />
      ))}

      {/* Renderizado de Cursor Principal (Reemplazo) */}
      {config && config.type === "replace" && (
        <div ref={cursorRef} className="cursor-follower">
          <div
            className={`${config.className} ${isClicking ? "clicking" : ""}`}
          />
        </div>
      )}

      {/* Renderizado de Cursor Custom (Componente React completo) */}
      {config && config.type === "custom" && (
        <config.component targetSelector="button, .shop-item, input, a, .coin-entity, .dock-item, .dock-icon" />
      )}
    </div>,
    document.body,
  );
}
