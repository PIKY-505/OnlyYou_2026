import React, { useState, useEffect } from "react";
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

// --- ASSETS ---
import appleCat from "../../assets/trails/apple-cat.gif";
import jumpCat from "../../assets/trails/jump-cat.gif";
import rollingCat from "../../assets/trails/rolling-cat.gif";
import duck from "../../assets/trails/duck.png";
import pompom from "../../assets/trails/pompom.png";
import skeletonRun from "../../assets/trails/skeleton-run.gif";

// --- SHOP DATA ---
const SHOP_DATA = {
  backgrounds: [
    {
      id: "gradient",
      name: "Original Gradient",
      description: "El clásico atemporal.",
      price: 0,
      type: "background",
      previewColor: "linear-gradient(45deg, #8629b1, #f700ff)",
    },
    {
      id: "galaxy",
      name: "Galaxy",
      description: "Un viaje a las estrellas.",
      price: 50,
      type: "background",
      previewColor: "#000", // Placeholder negro
    },
    {
      id: "silk",
      name: "Silk",
      description: "Suavidad y elegancia.",
      price: 100,
      type: "background",
      previewColor: "#ff99cc",
    },
    {
      id: "ballpit",
      name: "Ball Pit",
      description: "Física interactiva y relajante.",
      price: 150,
      type: "background",
      previewColor: "#29b1ff",
    },
    {
      id: "floatinglines",
      name: "Floating Lines",
      description: "Ondas de energía interactivas.",
      price: 200,
      type: "background",
      previewColor: "#bd71ff",
    },
    {
      id: "lightpillars",
      name: "Light Pillars",
      description: "Pilares de luz etéreos.",
      price: 250,
      type: "background",
      previewColor: "#00ffff",
    },
    {
      id: "pixelsnow",
      name: "Pixel Snow",
      description: "Nevada suave y distante.",
      price: 300,
      type: "background",
      previewColor: "#ffffff",
    },
    {
      id: "hyperspeed",
      name: "Hyperspeed",
      description: "Velocidad luz y distorsión.",
      price: 500,
      type: "background",
      previewColor: "#d856bf",
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
      description: "La moneda original.",
      price: 0,
      type: "skin",
      previewColor: "#ffd700",
      icon: <FiDisc />,
    },
  ],
};

const TABS = [
  { id: "backgrounds", label: "Fondos", icon: <FiImage /> },
  { id: "cursors", label: "Cursores", icon: <FiMousePointer /> },
  { id: "trails", label: "Mascotas", icon: <FiHeart /> },
  { id: "skins", label: "Monedas", icon: <FiDisc /> },
];

const ShopContainer = () => {
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
  } = useGameStore();

  // --- STATE ---
  const [displayShop, setDisplayShop] = useState(activeShop);

  useEffect(() => {
    if (activeShop) {
      setDisplayShop(activeShop);
    }
  }, [activeShop]);

  const currentItems = SHOP_DATA[displayShop] || [];

  const handleItemClick = (item) => {
    if (ownedItems.includes(item.id)) {
      // Equipar
      if (activeShop === "backgrounds") setBackground(item.id);
      if (activeShop === "cursors") setCursor(item.id);
      if (activeShop === "trails") setTrail(item.id);
      if (activeShop === "skins") setCoinSkin(item.id);
    } else {
      // Comprar
      if (coins >= item.price) {
        buyItem(item);
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
            className="shop-window"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{
              scale: 0.95,
              y: 10,
              opacity: 0,
              transition: { duration: 0.2 },
            }}>
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

              <div
                className="coin-display"
                style={{
                  color: "#ffd700",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginRight: "20px",
                }}>
                {coins} 🪙
              </div>

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
                        className="item-preview"
                        style={{ background: item.previewColor }}>
                        {item.icon && (
                          <div className="preview-icon">{item.icon}</div>
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
                        {ownedItems.includes(item.id) ? (
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
