import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGameStore } from "../../store/useStore";
import {
  FiX,
  FiCheck,
  FiImage,
  FiMousePointer,
  FiSlash,
  FiHeart,
  FiDisc,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/ShopContainer.scss";
import { CURSOR_CONFIG } from "../Layout/CursorController";

// --- ASSETS ---
import appleCat from "../../assets/trails/apple-cat.gif";
import jumpCat from "../../assets/trails/jump-cat.gif";
import rollingCat from "../../assets/trails/rolling-cat.gif";
import duck from "../../assets/trails/duck.png";
import pompom from "../../assets/trails/pompom.png";
import skeletonRun from "../../assets/trails/skeleton-run.gif";
import daseImg from "../../assets/coin/dase/dase.png";
import angelImg from "../../assets/coin/angel/angel.png";
import rachelImg from "../../assets/coin/rachel/rachel.png";
import natashaImg from "../../assets/coin/natasha/natasha.png";
import pikyImg from "../../assets/coin/piky/piky.png";
import cumImg from "../../assets/coin/cum/cum.png";
// Importa aquí la imagen que usarás como icono en la tienda

// --- BACKGROUND GIFS ---
import bgGalaxy from "../../assets/img/bkg/galaxy.gif";
import bgSilk from "../../assets/img/bkg/silk.gif";
import bgBallpit from "../../assets/img/bkg/ballpit.gif";
import bgFloating from "../../assets/img/bkg/floatinglines.gif";
import bgPillars from "../../assets/img/bkg/lightpillar.gif";
import bgSnow from "../../assets/img/bkg/pixel-snow.gif";
import bgHyperspeed from "../../assets/img/bkg/hyperspeed.gif";

// --- SHOP DATA ---
export const SHOP_DATA = {
  backgrounds: [
    {
      id: "gradient",
      name: "Original Gradient",
      description: "El clásico gradiente.",
      price: 0,
      type: "background",
      previewColor: "linear-gradient(45deg, #8629b1, #f700ff)",
    },
    {
      id: "silk",
      name: "Silk",
      description: "Suavidad y elegancia.",
      price: 100,
      type: "background",
      previewColor: "#ff99cc",
      image: bgSilk,
    },
    {
      id: "lightpillars",
      name: "Light Pillars",
      description: "Pilares de luz etéreos.",
      price: 200,
      type: "background",
      previewColor: "#00ffff",
      image: bgPillars,
    },
    {
      id: "pixelsnow",
      name: "Pixel Snow",
      description: "Nevada retro pixelada.",
      price: 300,
      type: "background",
      previewColor: "#ffffff",
      image: bgSnow,
    },
    {
      id: "floatinglines",
      name: "Floating Lines",
      description: "Ondas de energía interactivas.",
      price: 500,
      type: "background",
      previewColor: "#bd71ff",
      image: bgFloating,
    },
    {
      id: "galaxy",
      name: "Galaxy",
      description: "Un viaje por las estrellas.",
      price: 600,
      type: "background",
      previewColor: "#000", // Placeholder negro
      image: bgGalaxy,
    },
    {
      id: "hyperspeed",
      name: "Hyperspeed",
      description: "Velocidad luz y distorsión.",
      price: 900,
      type: "background",
      previewColor: "#d856bf",
      image: bgHyperspeed,
    },
    {
      id: "ballpit",
      name: "Ball Pit",
      description: "Un parque de bolas!!",
      price: 1500,
      type: "background",
      previewColor: "#29b1ff",
      image: bgBallpit,
    },
  ],
  cursors: [
    {
      id: "default",
      name: "Ratón Estándar",
      description: "El cursor de toda la vida.",
      price: 0,
      type: "cursor",
      previewColor: "transparent",
      icon: <FiMousePointer />,
    },
    ...Object.entries(CURSOR_CONFIG).map(([id, config]) => ({
      id: id,
      name: config.name,
      description: config.desc,
      price: config.price,
      type: "cursor",
      previewColor: "transparent",
      icon: config.icon,
      requiresAchievement: config.requiresAchievement,
      hiddenInShop: config.hiddenInShop,
    })).sort((a, b) => a.price - b.price),
  ],
  trails: [
    {
      id: "none",
      name: "Ninguno",
      description: "Sin rastro, limpio y rápido.",
      price: 0,
      type: "trail",
      previewColor: "transparent",
      icon: <FiSlash />,
    },
    {
      id: "apple-cat",
      name: "Gato Manzana",
      description: "Un gatito adorable en una manzana.",
      price: 100,
      type: "trail",
      previewColor: "#ffadad",
      icon: <img src={appleCat} alt="Apple Cat" style={{ width: "40px" }} />,
    },
    {
      id: "jump-cat",
      name: "Gato Saltarín",
      description: "Siempre lleno de energía.",
      price: 100,
      type: "trail",
      previewColor: "#a89c8d",
      icon: <img src={jumpCat} alt="Jump Cat" style={{ width: "40px" }} />,
    },
    {
      id: "rolling-cat",
      name: "Gato Rodante",
      description: "Rodando hacia tu corazón.",
      price: 100,
      type: "trail",
      previewColor: "#ffecb6",
      icon: (
        <img src={rollingCat} alt="Rolling Cat" style={{ width: "40px" }} />
      ),
    },
    {
      id: "duck",
      name: "Pato",
      description: "Cuack cuack.",
      price: 100,
      type: "trail",
      previewColor: "#ebe371",
      icon: <img src={duck} alt="Duck" style={{ width: "40px" }} />,
    },
    {
      id: "pompom",
      name: "Pompom",
      description: "Suave y esponjoso.",
      price: 100,
      type: "trail",
      previewColor: "#e3e4b2",
      icon: <img src={pompom} alt="Pompom" style={{ width: "40px" }} />,
    },
    {
      id: "skeleton-run",
      name: "Esqueleto",
      description: "Spooky scary skeletons.",
      price: 100,
      type: "trail",
      previewColor: "#a3a3a3",
      icon: <img src={skeletonRun} alt="Skeleton" style={{ width: "40px" }} />,
    },
  ],
  skins: [
    {
      id: "dase",
      name: "Dase Original",
      description: "Esta piba.",
      price: 0,
      type: "skin",
      previewColor: "#f6ffa3",
      icon: <img src={daseImg} alt="Dase" style={{ width: "100px", height: "60px", objectFit: "contain", borderRadius: "20%" }} />,
    },
    {
      id: "angel",
      name: "Angel",
      description: "Monke.",
      price: 0,
      type: "skin",
      previewColor: "#e0ffff",
      icon: <img src={angelImg} alt="Angel" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "10%" }} />,
    },
    {
      id: "rachel",
      name: "Rachel",
      description: "La criminologa.",
      price: 0,
      type: "skin",
      previewColor: "#ffc0cb",
      icon: <img src={rachelImg} alt="Rachel" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "10%" }} />,
    },
        {
      id: "natasha",
      name: "Natalia",
      description: "Es Natalia...",
      price: 0,
      type: "skin",
      previewColor: "#ffcccb",
      icon: <img src={natashaImg} alt="Natasha" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "10%" }} />,
    },
    {
      id: "piky",
      name: "Piky",
      description: "La moneda de Piky.",
      price: 0,
      type: "skin",
      previewColor: "#ff99cc",
      icon: <img src={pikyImg} alt="Piky" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "10%" }} />,
    },
    {
      id: "cum",
      name: "Cum",
      description: "La moneda de Cum.",
      price: 0,
      type: "skin",
      previewColor: "#ffffff",
      icon: <img src={cumImg} alt="Cum" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "10%" }} />,
    },
    // --- AÑADE AQUÍ TU NUEVA MONEDA ---
    // {
    //   id: "nombre_carpeta", // IMPORTANTE: Debe coincidir con el nombre de la carpeta en src/assets/coin/
    //   name: "Nombre Visible",
    //   description: "Descripción para la tienda.",
    //   price: 1000, // Precio (0 para gratis)
    //   type: "skin",
    //   previewColor: "#ffffff", // Color de fondo en la tarjeta de la tienda
    //   icon: <img src={tuImagenImportada} alt="Icono" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "10%" }} />,
    // },
  ],
};

const TABS = [
  { id: "backgrounds", label: "Fondos", icon: <FiImage /> },
  { id: "cursors", label: "Cursores", icon: <FiMousePointer /> },
  { id: "trails", label: "Mascotas", icon: <FiHeart /> },
  { id: "skins", label: "Monedas", icon: <FiDisc /> },
];

const ShopContainer = ({ enableGoldTheme = true }) => {
  const {
    activeShop,
    openShop,
    closeShop,
    activeBackground,
    setBackground,
    activeCursor,
    setCursor,
    activeTrail,
    setTrail,
    coins,
    buyItem,
    ownedItems,
    activeCoinSkin,
    setCoinSkin,
    achievements,
    unlockAchievement,
  } = useGameStore();

  // --- STATE ---
  const [displayShop, setDisplayShop] = useState(activeShop);
  const [shopParticles, setShopParticles] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    if (activeShop) {
      setDisplayShop(activeShop);
    }
  }, [activeShop]);

  // Detectar logro Coleccionista automáticamente
  useEffect(() => {
    if (ownedItems && !achievements.includes("collector")) {
      // Filtramos las skins para que no cuenten
      // TAMBIÉN filtramos los items que requieren logros (como el cursor de prestigio)
      const allNonSkinItems = Object.values(SHOP_DATA).flat().filter((item) => item.type !== "skin" && !item.requiresAchievement);
      const hasAllNonSkins = allNonSkinItems.every((item) => ownedItems.includes(item.id));

      if (hasAllNonSkins) {
        unlockAchievement("collector");
      }
    }
  }, [ownedItems, achievements, unlockAchievement]);

  const isCollector = achievements && achievements.includes("collector");
  const showGold = isCollector && enableGoldTheme;

  // --- PARTICLE SYSTEM FOR GOLDEN SHOP ---
  const updateParticles = useCallback(() => {
    if (!showGold) return;

    setShopParticles((prev) =>
      prev
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 0.02,
          size: p.size * 0.95,
        }))
        .filter((p) => p.life > 0),
    );

    requestRef.current = requestAnimationFrame(updateParticles);
  }, [showGold]);

  useEffect(() => {
    if (showGold && activeShop) {
      requestRef.current = requestAnimationFrame(updateParticles);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [showGold, activeShop, updateParticles]);

  const handleShopMouseMove = (e) => {
    if (!showGold) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Añadir partículas (limitado ligeramente para rendimiento)
    if (Math.random() > 0.5) return;

    const newParticle = {
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 + 0.5, // Caen un poco
      life: 1,
      size: Math.random() * 3 + 2,
    };
    setShopParticles((prev) => [...prev, newParticle]);
  };

  // Filtramos los items para ocultar los secretos si no se tiene el logro
  const currentItems = (SHOP_DATA[displayShop] || []).filter((item) => {
    if (item.hiddenInShop) return false;
    if (item.requiresAchievement) {
      return achievements.includes(item.requiresAchievement);
    }
    return true;
  });

  // Helper: Consideramos un item "en propiedad" si está en la lista de comprados O si su precio es 0 (gratis/default)
  const isOwned = (item) => ownedItems.includes(item.id) || item.price === 0;

  const handleItemClick = (item) => {
    if (isOwned(item)) {
      // Equipar
      if (activeShop === "backgrounds") setBackground(item.id);
      if (activeShop === "cursors") setCursor(item.id);
      if (activeShop === "trails") setTrail(item.id);
      if (activeShop === "skins") setCoinSkin(item.id);
    } else {
      // Comprar
      if (coins >= item.price) {
        buyItem(item);
        // Auto-equipar al comprar para feedback inmediato
        if (activeShop === "backgrounds") setBackground(item.id);
        if (activeShop === "cursors") setCursor(item.id);
        if (activeShop === "trails") setTrail(item.id);
        if (activeShop === "skins") setCoinSkin(item.id);
      }
    }
  };

  const isEquipped = (itemId) => {
    if (activeShop === "backgrounds") return activeBackground === itemId;
    if (activeShop === "cursors") return activeCursor === itemId;
    if (activeShop === "trails") return activeTrail === itemId;
    if (activeShop === "skins") return activeCoinSkin === itemId;
    return false;
  };

  return (
    <AnimatePresence>
      {activeShop && (
        <motion.div
          className="shop-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
          <div
            className="click-outside-layer"
            onClick={closeShop}
            style={{ position: "absolute", inset: 0, pointerEvents: "auto" }}
          />

          <motion.div
            className={`shop-window ${showGold ? "gold-theme" : ""}`}
            onMouseMove={handleShopMouseMove}
            // Transición unificada (Spring) para entrada/salida, sea dorado o no
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            {/* --- CAPA DE FONDO DORADO (Transición suave) --- */}
            <motion.div
              className="gold-bg-layer"
              initial={{ opacity: 0 }}
              animate={{ opacity: showGold ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* --- PARTICLES LAYER --- */}
            {shopParticles.map((p) => (
              <div
                key={p.id}
                className="gold-particle"
                style={{
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size,
                  opacity: p.life,
                }}
              />
            ))}

            {/* --- HEADER --- */}
            <div className="shop-header-row">
              <div className="shop-tabs">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => openShop(tab.id)}
                    className={`tab-btn ${activeShop === tab.id ? "active" : ""}`}>
                    {tab.icon}
                    <span>{tab.label}</span>
                    {activeShop === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="active-line"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="coin-display">{coins} 🪙</div>

              <button onClick={closeShop} className="close-btn">
                <FiX />
              </button>
            </div>

            <div className="shop-section-title">
              Catálogo de{" "}
              {displayShop === "backgrounds"
                ? "Fondos"
                : displayShop === "cursors"
                  ? "Cursores"
                  : displayShop === "trails"
                    ? "Mascotas"
                    : "Monedas"}
            </div>

            {/* --- GRID --- */}
            <div className="shop-grid">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayShop}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: "20px",
                    width: "100%",
                  }}>
                  {currentItems.map((item) => (
                    <div
                      key={item.id}
                      className={`shop-item ${isEquipped(item.id) ? "equipped" : ""}`}
                      onClick={() => handleItemClick(item)}>
                      <div
                        className={`item-preview ${item.type}`}
                        style={{
                          background: item.previewColor,
                        }}>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              position: "absolute",
                              top: 0,
                              left: 0,
                            }}
                          />
                        )}
                        {item.icon && (
                          <div className="preview-icon" style={{ zIndex: 1 }}>
                            {item.icon}
                          </div>
                        )}

                        {isEquipped(item.id) && (
                          <div className="check-badge">
                            <FiCheck />
                          </div>
                        )}
                      </div>

                      <div className="item-info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        {isOwned(item) ? (
                          <span
                            className="price-tag"
                            style={{
                              color: "#00e676",
                              background: "rgba(0, 230, 118, 0.15)",
                            }}>
                            {isEquipped(item.id) ? "Equipado" : "En propiedad"}
                          </span>
                        ) : (
                          <span className="price-tag">
                            {item.price} Monedas
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShopContainer;
