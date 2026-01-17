import React from "react";
import { useGameStore } from "../../store/useStore";
import { FiX, FiCheck, FiImage, FiMousePointer, FiWind } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/ShopContainer.scss";

// --- BASE DE DATOS DE LA TIENDA ---
const SHOP_DATA = {
  backgrounds: [
    {
      id: "gradient",
      name: "Original Gradient",
      description: "El clásico atemporal.",
      price: "Gratis",
      previewColor: "linear-gradient(45deg, #8629b1, #f700ff)",
    },
    {
      id: "galaxy",
      name: "Galaxy",
      description: "Un viaje a las estrellas.",
      price: "Gratis",
      previewColor: "#000", // Placeholder negro
    },
  ],
  cursors: [
    {
      id: "default",
      name: "Ratón Estándar",
      description: "El cursor de toda la vida.",
      price: "Gratis",
      previewColor: "#ffffff",
      icon: <FiMousePointer />, // Icono para previsualizar
    },
    // Aquí añadiremos más cursores luego
  ],
  trails: [
    {
      id: "none",
      name: "Ninguno",
      description: "Sin rastro, limpio y rápido.",
      price: "Gratis",
      previewColor: "transparent",
      icon: <FiX />, // Icono de 'nada'
    },
    // Aquí añadiremos más rastros luego
  ],
};

// Configuración de las pestañas
const TABS = [
  { id: "backgrounds", label: "Fondos", icon: <FiImage /> },
  { id: "cursors", label: "Cursores", icon: <FiMousePointer /> },
  { id: "trails", label: "Rastros", icon: <FiWind /> },
];

const ShopContainer = () => {
  const {
    activeShop,
    openShop, // Para cambiar de pestaña
    closeShop,
    // Estados de equipamiento
    activeBackground,
    setBackground,
    activeCursor,
    setCursor,
    activeTrail,
    setTrail,
  } = useGameStore();

  if (!activeShop) return null;

  // Obtener los items de la categoría actual
  const currentItems = SHOP_DATA[activeShop] || [];

  // Función inteligente para equipar según la categoría
  const handleEquip = (itemId) => {
    if (activeShop === "backgrounds") setBackground(itemId);
    if (activeShop === "cursors") setCursor(itemId);
    if (activeShop === "trails") setTrail(itemId);

    // Opcional: ¿Quieres cerrar la tienda al equipar?
    // Si prefieres que siga abierta para seguir comprando, comenta la siguiente línea:
    closeShop();
  };

  // Función para saber si un item está equipado
  const isEquipped = (itemId) => {
    if (activeShop === "backgrounds") return activeBackground === itemId;
    if (activeShop === "cursors") return activeCursor === itemId;
    if (activeShop === "trails") return activeTrail === itemId;
    return false;
  };

  return (
    <motion.div
      className="shop-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className="shop-window">
        {/* CABECERA CON NAVEGACIÓN */}
        <div className="shop-header-row">
          {/* BARRA DE PESTAÑAS (El menú desplegable visual) */}
          <div className="shop-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => openShop(tab.id)} // Cambia la tienda sin cerrar
                className={`tab-btn ${activeShop === tab.id ? "active" : ""}`}>
                {tab.icon}
                <span>{tab.label}</span>
                {/* Línea brillante de la pestaña activa */}
                {activeShop === tab.id && (
                  <motion.div layoutId="activeTab" className="active-line" />
                )}
              </button>
            ))}
          </div>

          <button onClick={closeShop} className="close-btn">
            <FiX />
          </button>
        </div>

        {/* TÍTULO DE LA SECCIÓN (Opcional, ya que las pestañas lo dicen) */}
        <div className="shop-section-title">
          Catálogo de{" "}
          {activeShop === "backgrounds"
            ? "Fondos"
            : activeShop === "cursors"
              ? "Cursores"
              : "Rastros"}
        </div>

        {/* GRILLA DE PRODUCTOS */}
        <div className="shop-grid">
          <AnimatePresence mode="wait">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                layout // Animación mágica al cambiar de lista
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`shop-item ${isEquipped(item.id) ? "equipped" : ""}`}
                onClick={() => handleEquip(item.id)}>
                {/* PREVISUALIZACIÓN */}
                <div
                  className="item-preview"
                  style={{ background: item.previewColor }}>
                  {/* Si el item tiene icono (cursor/rastro), lo mostramos */}
                  {item.icon && <div className="preview-icon">{item.icon}</div>}

                  {isEquipped(item.id) && (
                    <div className="check-badge">
                      <FiCheck />
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price-tag">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopContainer;
