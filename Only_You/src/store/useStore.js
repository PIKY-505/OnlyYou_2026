import { create } from "zustand";

export const useGameStore = create((set) => ({
  // ... Estado existente (isUnlocked, etc) ...
  isUnlocked: false,
  unlockApp: () => set({ isUnlocked: true }),
  lockGame: () => set({ isUnlocked: false }),

  // --- LÓGICA DE TIENDA Y NAVEGACIÓN ---
  activeShop: null, // 'backgrounds' | 'cursors' | 'trails'
  openShop: (shopType) => set({ activeShop: shopType }),
  closeShop: () => set({ activeShop: null }),

  isGameActive: false,
  toggleGame: () => set((state) => ({ isGameActive: !state.isGameActive })),

  coins: 0,
  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),

  // Skin actual de las monedas (por defecto 'dase')
  activeCoinSkin: "dase",
  setCoinSkin: (skin) => set({ activeCoinSkin: skin }),

  // --- INVENTARIO Y COMPRAS ---
  ownedItems: ["gradient", "default", "none", "dase"], // Items que el usuario ya tiene
  buyItem: (item) =>
    set((state) => {
      if (state.ownedItems.includes(item.id)) return state; // Ya lo tienes
      if (state.coins >= item.price) {
        return {
          coins: state.coins - item.price,
          ownedItems: [...state.ownedItems, item.id],
        };
      }
      return state; // No hay suficientes monedas
    }),

  // --- INVENTARIO EQUIPADO ---

  // 1. FONDOS
  activeBackground: "gradient",
  setBackground: (id) => set({ activeBackground: id }),

  // 2. CURSORES (Nuevo)
  activeCursor: "default",
  setCursor: (id) => set({ activeCursor: id }),

  // 3. RASTROS (Nuevo)
  activeTrail: "none",
  setTrail: (id) => set({ activeTrail: id }),
}));
