import React, { useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useVelocity,
} from "framer-motion";

const PrestigeCursor = () => {
  // 1. Posición exacta del mouse (el punto de enganche)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Física del diamante (Spring para simular peso e inercia)
  // Ajustado: Más rigidez (stiffness) para que no parezca una correa larga
  // Menos masa para que reaccione rápido pero mantenga inercia
  const springConfig = { damping: 20, stiffness: 300, mass: 0.2 };

  const diamondX = useSpring(mouseX, springConfig);
  const diamondY = useSpring(mouseY, springConfig);

  // 3. Rotación basada en la velocidad (Efecto Péndulo)
  const velocityX = useVelocity(diamondX);
  // Aumentamos el rango de rotación para más dramatismo
  const rotate = useTransform(velocityX, [-2500, 2500], [-105, 105]);

  // Longitud de la cadena (offset vertical)
  const CHAIN_LENGTH = 35;

  // 4. Cadenas (Doble curva Bezier para simular collar)
  const chainPath1 = useTransform(
    [mouseX, mouseY, diamondX, diamondY],
    ([mx, my, dx, dy]) => {
      const ty = dy + CHAIN_LENGTH;
      return `M ${mx - 4} ${my} Q ${(mx + dx) / 2 - 12} ${(my + ty) / 2} ${dx} ${ty}`;
    }
  );

  const chainPath2 = useTransform(
    [mouseX, mouseY, diamondX, diamondY],
    ([mx, my, dx, dy]) => {
      const ty = dy + CHAIN_LENGTH;
      return `M ${mx + 4} ${my} Q ${(mx + dx) / 2 + 12} ${(my + ty) / 2} ${dx} ${ty}`;
    }
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      {/* Cadena del collar */}
      <svg style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Sombra de la cadena */}
        <motion.path
          d={chainPath1}
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="3"
          fill="none"
          style={{ translateX: 2, translateY: 2 }}
        />
        <motion.path
          d={chainPath2}
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="3"
          fill="none"
          style={{ translateX: 2, translateY: 2 }}
        />

        {/* Cadena real con efecto de eslabones */}
        <motion.path
          d={chainPath1}
          stroke="url(#chainGradient)"
          strokeWidth="2"
          strokeDasharray="3 2"
          strokeLinecap="round"
          fill="none"
        />
        <motion.path
          d={chainPath2}
          stroke="url(#chainGradient)"
          strokeWidth="2"
          strokeDasharray="3 2"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="chainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Punto de anclaje (Cursor real) */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          background: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 10px #fff, 0 0 5px #f700ff",
          zIndex: 20,
        }}
      />

      {/* Diamante Colgante */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: diamondX,
          y: diamondY,
          translateX: "-50%",
          translateY: CHAIN_LENGTH - 18, // Centrar visualmente respecto al final de la cadena
          rotate,
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
        }}
      >
        <div style={{ 
            fontSize: "32px", 
            filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.4))",
            position: "relative",
        }}>
          💎
          {/* Destello animado */}
          <div style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 60%)",
            mixBlendMode: "overlay",
            opacity: 0.8,
            animation: "diamondSparkle 2s infinite ease-in-out"
          }} />
        </div>
      </motion.div>
      
      <style>{`
        @keyframes diamondSparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default PrestigeCursor;