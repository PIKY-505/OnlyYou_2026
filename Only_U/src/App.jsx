import React from "react";
import { useGameStore } from "./store/useStore";
import LockScreen from "./components/Layout/LockScreen";
import MainContent from "./components/Layout/MainContent";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/main.scss";

function App() {
  const { isUnlocked, activeBackground } = useGameStore();

  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}>
      {/* 1. EL CANDADO (Capa Superior) */}
      {/* Quitamos mode='wait' para permitir que el contenido de abajo cargue mientras este se va */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            key="lock-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              transition: { duration: 2 },
            }}
            style={{ position: "fixed", zIndex: 9999, inset: 0 }}>
            <LockScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. EL CONTENIDO PRINCIPAL (Capa Inferior) */}
      {isUnlocked && (
        <motion.div
          className="app-content"
          initial={{ opacity: 0, scale: 1 }} // Empezamos un pelín más pequeño
          animate={{ opacity: 1, scale: 1 }} // Zoom in suave
          transition={{ duration: 1 }} // Sin delay, empieza YA
          style={{ width: "100%", height: "100%", position: "relative" }}>
          {/* CAPA DE FONDO */}
          <div
            className="layer-background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              // Tu gradiente o el componente de fondo que pongamos luego
              background: "linear-gradient(45deg, #8629b1 0%, #f700ff 100%)",
            }}></div>

          <MainContent />
        </motion.div>
      )}
    </main>
  );
}

export default App;
