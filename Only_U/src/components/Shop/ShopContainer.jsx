import React from "react";
import { useGameStore } from "../../store/useStore";
import { FiX, FiCheck } from "react-icons/fi"; // Necesitamos iconos
import { motion } from "framer-motion";
import "../../styles/ShopContainer.scss";

const ShopContainer = () => {
  const { activeShop, closeShop, activeBackground, setBackground } =
    useGameStore();

  // DATOS DE PRUEBA (Luego vendrán de una config real)
  const items = [
    {
      id: "gradient",
      name: "Original Gradient",
      description: "El clásico atemporal.",
      price: "Gratis",
      color: "linear-gradient(45deg, #8629b1, #f700ff)",
    },
    {
      id: "galaxy",
      name: "Galaxy",
      description: "Un viaje a las estrellas (ReactBits).",
      price: "Gratis",
      color: "black", // Placeholder visual
    },
  ];

  // Si no hay tienda abierta, no renderizamos nada
  if (!activeShop) return null;

  const handleEquip = (itemId) => {
    // 1. Cambiamos el fondo
    if (activeShop === "backgrounds") {
      setBackground(itemId);
    }
    // 2. Cerramos la tienda (como pediste)
    closeShop();
  };

  return (
    <motion.div
      className="shop-overlay"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}>
      <div className="shop-window">
        {/* CABECERA */}
        <div className="shop-header">
          <h2>
            Tienda de <span className="highlight">{activeShop}</span>
          </h2>
          <button onClick={closeShop} className="close-btn">
            <FiX />
          </button>
        </div>

        {/* GRILLA DE PRODUCTOS */}
        <div className="shop-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className={`shop-item ${activeBackground === item.id ? "equipped" : ""}`}
              onClick={() => handleEquip(item.id)}>
              {/* PREVISUALIZACIÓN */}
              <div className="item-preview" style={{ background: item.color }}>
                {/* Si está equipado, mostramos un check */}
                {activeBackground === item.id && (
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
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ShopContainer;
