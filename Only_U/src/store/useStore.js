import { create } from "zustand";

export const useGameStore = create((set) => ({
  // ... Estado existente ...
  isUnlocked: false, // (O true si quieres probar sin desbloquear cada vez)
  unlockApp: () => set({ isUnlocked: true }),

  // --- NUEVA LÓGICA DE TIENDA ---

  // Qué tienda está abierta: 'backgrounds', 'cursors', 'trails' o null
  activeShop: null,
  openShop: (shopType) => set({ activeShop: shopType }),
  closeShop: () => set({ activeShop: null }),

  // Objeto equipado actualmente
  activeBackground: "gradient", // 'gradient' | 'galaxy' | etc.
  setBackground: (bgId) => set({ activeBackground: bgId }),

  // Aquí pondremos cursores y trails luego
}));
