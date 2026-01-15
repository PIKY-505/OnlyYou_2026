import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Pon aquí el nombre EXACTO de tu repo entre barras
  base: "/OnlyU_2026/",
});
