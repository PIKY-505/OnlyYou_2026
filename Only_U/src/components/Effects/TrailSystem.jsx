import React, { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useGameStore } from "../../store/useStore";

const TrailSystem = () => {
  const { activeTrail } = useGameStore();

  // Coordenadas del ratón (MotionValues para rendimiento)
  const mouseX = useMotionValue(-100); // Empieza fuera de pantalla
  const mouseY = useMotionValue(-100);

  // Configuración del muelle (Spring) para el retraso suave
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };

  // Valores suavizados que seguirá la mascota
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!activeTrail || activeTrail === "none") return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999, // Siempre encima de todo
      }}>
      {/* --- MASCOTA: FANTASMA --- */}
      {activeTrail === "ghost" && (
        <motion.div
          style={{
            x,
            y,
            translateX: "-50%", // Centrar en el cursor
            translateY: "-50%",
            fontSize: "2rem",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
          }}>
          👻
        </motion.div>
      )}
    </div>
  );
};

export default TrailSystem;
