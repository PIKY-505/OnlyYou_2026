import React from "react";
import { useGameStore } from "./store/useStore";
import LockScreen from "./components/Layout/LockScreen";
import MainContent from "./components/Layout/MainContent";
import GradientBackground from "./components/Backgrounds/GradientBackground";
import StaggeredMenu from "./components/UI/StaggeredMenu";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/main.scss";

// CONFIGURACIÓN DEL MENÚ
// (Ya sin la opción Premium como pediste)
const shopItems = [
  { label: "Fondos", link: "#", ariaLabel: "Galería de fondos" },
  { label: "Cursores", link: "#", ariaLabel: "Personalizar cursor" },
  { label: "Rastros", link: "#", ariaLabel: "Efectos de rastro" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com" },
  { label: "Instagram", link: "https://instagram.com" },
];

function App() {
  const { isUnlocked } = useGameStore();

  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}>
      {/* 1. EL CANDADO */}
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

      {/* 2. EL CONTENIDO PRINCIPAL */}
      {isUnlocked && (
        <motion.div
          className="app-content"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ width: "100%", height: "100%", position: "relative" }}>
          <div className="layer-background">
            <GradientBackground />
          </div>

          {/* MENÚ STAGGERED CORREGIDO */}
          {/* Al usar isFixed, se pega a la pantalla completa y respeta el 'right' */}
          <StaggeredMenu
            items={shopItems}
            socialItems={socialItems}
            isFixed={true}
            position="right"
            // PALETA ORIGINAL (La que mejor queda con tu fondo)
            // 1. Rosa Neón (Frente)
            // 2. Lavanda (Medio)
            // 3. Morado Oscuro (Fondo)
            colors={["#f700ff", "#bd71ff", "#8629b1"]}
            // Acento al pasar el ratón (Rosa Neón)
            accentColor="#f700ff"
            menuButtonColor="#fff"
            // Detalle fino: Al abrir, el botón "Close" se pone Rosa
            openMenuButtonColor="#ffffff"
            displayItemNumbering={true}
            logoUrl={null}
          />

          <MainContent />
        </motion.div>
      )}
    </main>
  );
}

export default App;
