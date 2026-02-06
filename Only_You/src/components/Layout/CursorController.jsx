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
  FiNavigation,
  FiAperture,
} from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import TargetCursor from "./TargetCursor";
import SplashCursor from "./SplashCursor";
import Crosshair from "./Crosshair";
import PrestigeCursor from "./PrestigeCursor";

// --- ASSETS ---
import ringCursor from "../../assets/img/cursor/ring.gif";

// Configuración de los cursores
export const CURSOR_CONFIG = {
  // ID del item en la tienda : Configuración
  cursor_neon: {
    name: "Neon Pulse",
    price: 500,
    desc: "Estilo Cyberpunk. Cambia de color.",
    icon: <FiNavigation />,
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
  cursor_ring: {
    name: "Anillo",
    price: 1500,
    desc: "Un anillo animado.",
    icon: <FiDisc />,
    type: "replace",
    className: "cursor-ring",
    backgroundImage: ringCursor,
  },
  cursor_blackhole: {
    name: "Agujero Negro",
    price: 2000,
    desc: "Singularidad que distorsiona la luz.",
    icon: <FiAperture />,
    type: "replace",
    className: "cursor-blackhole",
  },
  cursor_crosshair: {
    name: "Crosshair",
    price: 3000,
    desc: "Líneas de precisión con distorsión.",
    icon: <FiCrosshair />,
    type: "custom",
    component: Crosshair,
  },
  cursor_splash: {
    name: "Splash Fluid",
    price: 4000,
    desc: "Tinta fluida reactiva.",
    icon: <FiDroplet />,
    type: "custom",
    component: SplashCursor,
    hideNative: false,
  },
  cursor_target: {
    name: "Target HUD",
    price: 5000,
    desc: "Sistema de fijación táctico.",
    icon: <FiMaximize />,
    type: "custom", // Nuevo tipo para componentes completos
    component: TargetCursor,
  },
  cursor_prestige: {
    name: "Prestigio",
    price: 0,
    desc: "Símbolo de máxima excelencia.",
    icon: <FaTrophy />,
    type: "custom",
    component: PrestigeCursor,
    requiresAchievement: "prestige", // Propiedad especial para filtrado
    hiddenInShop: true, // No aparecerá en la lista de compra
  },
};

export default function CursorController() {
  // Asumimos que activeCursor existe en tu store (si no, añádelo)
  const { activeCursor } = useGameStore();
  const cursorRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detección de móvil para desactivar cursor personalizado
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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

    if (config) {
      // Caso 1: Ocultar nativo (para reemplazos div o custom)
      if (
        (config.type === "replace" || config.type === "custom") &&
        config.hideNative !== false
      ) {
        document.body.classList.add("hide-native-cursor");
      }
      // Caso 2: Cursor nativo personalizado (CSS class)
      if (config.bodyClass) {
        document.body.classList.add(config.bodyClass);
      }
    }
    
    return () => {
      document.body.classList.remove("hide-native-cursor");
      if (config && config.bodyClass) {
        document.body.classList.remove(config.bodyClass);
      }
    };
  }, [activeCursor]);

  // En móvil no renderizamos nada para mejorar rendimiento y UX
  if (isMobile) return null;

  // Si no hay cursor activo o es el default, no renderizamos nada (o solo partículas si quedan)
  const config = CURSOR_CONFIG[activeCursor];

  return ReactDOM.createPortal(
    <div className="cursor-overlay">
      {/* Renderizado de Partículas (Complemento) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="sparkle-particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}

      {/* Renderizado de Cursor Principal (Reemplazo) */}
      {config && config.type === "replace" && (
        <div ref={cursorRef} className="cursor-follower">
          <div
            className={`${config.className} ${isClicking ? "clicking" : ""}`}
            style={config.backgroundImage ? { backgroundImage: `url(${config.backgroundImage})` } : {}}
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
