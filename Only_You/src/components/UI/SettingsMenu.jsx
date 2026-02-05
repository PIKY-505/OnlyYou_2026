import React, { useState, useRef, useEffect } from "react";
import {
  FiSettings,
  FiVolume2,
  FiFileText,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { FaTrophy, FaLock } from "react-icons/fa";
import { useGameStore } from "../../store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS_DATA } from "../../data/achievements";
import { SHOP_DATA } from "../Shop/ShopContainer";
import "../../styles/SettingsMenu.scss";

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDoc, setShowDoc] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const menuRef = useRef(null);
  const { gameVolume, setGameVolume, resetProgress, achievements, ownedItems } =
    useGameStore();

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleReset = () => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?",
      )
    ) {
      resetProgress();
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="settings-container" ref={menuRef}>
        <button
          className={`settings-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ajustes">
          <FiSettings size={20} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="settings-dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              {/* Volumen */}
              <div className="setting-item">
                <div className="label">
                  <FiVolume2 /> <span>Sonido Juego</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={gameVolume}
                  onChange={(e) => setGameVolume(parseFloat(e.target.value))}
                />
              </div>

              <div className="divider" />

              {/* Logros */}
              <button
                className="setting-action-btn"
                onClick={() => {
                  setShowAchievements(true);
                  setIsOpen(false);
                }}>
                <FaTrophy /> Logros
              </button>

              {/* Documentación */}
              <button
                className="setting-action-btn"
                onClick={() => {
                  setShowDoc(true);
                  setIsOpen(false);
                }}>
                <FiFileText /> Documentación
              </button>

              {/* Resetear Progreso */}
              <button
                className="setting-action-btn danger"
                onClick={handleReset}>
                <FiTrash2 /> Resetear Progreso
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal de Documentación */}
      <AnimatePresence>
        {showDoc && (
          <div className="doc-overlay" onClick={() => setShowDoc(false)}>
            <motion.div
              className="doc-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}>
              <button
                className="close-doc-btn"
                onClick={() => setShowDoc(false)}>
                <FiX size={24} />
              </button>
              <h2>Mecánicas del Juego</h2>
              <div className="doc-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p>
                  <strong>Monedas:</strong> Haz click en las monedas flotantes
                  para recolectarlas. Las monedas especiales (brillantes) valen
                  más puntos.
                </p>
                <p>
                  <strong>Tienda:</strong> Usa tus monedas para desbloquear
                  nuevos fondos, cursores y skins para las monedas.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal de Logros */}
      <AnimatePresence>
        {showAchievements && (
          <div
            className="doc-overlay"
            onClick={() => setShowAchievements(false)}>
            <motion.div
              className="doc-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}>
              <button
                className="close-doc-btn"
                onClick={() => setShowAchievements(false)}>
                <FiX size={24} />
              </button>
              <h2>
                <FaTrophy style={{ marginRight: "10px", color: "#ffd700" }} />{" "}
                Tus Logros
              </h2>
              <div className="doc-content">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}>
                  {Object.entries(ACHIEVEMENTS_DATA).map(([key, data]) => {
                    const isUnlocked = achievements.includes(key);

                    // Lógica para mostrar contador en el logro de Coleccionista
                    let description = data.desc;
                    if (key === "collector") {
                      const totalItems = Object.values(SHOP_DATA).reduce(
                        (acc, category) => acc + category.length,
                        0,
                      );
                      const currentOwned = ownedItems ? ownedItems.length : 0;
                      description = `${data.desc} (${currentOwned}/${totalItems})`;
                    }

                    // Lógica para mostrar contador en el logro de Prestigio
                    if (key === "prestige") {
                      const allKeys = Object.keys(ACHIEVEMENTS_DATA);
                      const requiredKeys = allKeys.filter(
                        (k) => k !== "prestige",
                      );
                      const unlockedCount = achievements.filter((k) =>
                        requiredKeys.includes(k),
                      ).length;
                      description = `${data.desc} (${unlockedCount}/${requiredKeys.length})`;
                    }

                    return (
                      <div
                        key={key}
                        style={{
                          background: isUnlocked
                            ? "rgba(255, 215, 0, 0.1)"
                            : "rgba(255, 255, 255, 0.05)",
                          border: isUnlocked
                            ? "1px solid rgba(255, 215, 0, 0.3)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                          padding: "15px",
                          borderRadius: "12px",
                          opacity: isUnlocked ? 1 : 0.5,
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                        }}>
                        <div style={{ fontSize: "2rem" }}>
                          {isUnlocked ? (
                            data.icon
                          ) : (
                            <FaLock className="locked-icon" />
                          )}
                        </div>
                        <div>
                          <h3
                            style={{
                              margin: "0 0 5px 0",
                              color: isUnlocked ? "#ffd700" : "white",
                            }}>
                            {data.title}
                          </h3>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "0.9rem",
                              color: "rgba(255,255,255,0.7)",
                            }}>
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsMenu;
