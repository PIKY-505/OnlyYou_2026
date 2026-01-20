import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // CAMBIO AQUÍ: Subimos a 1600 kbs (1.6 MB) para cubrir tu vendor de 1.14 MB
    chunkSizeWarningLimit: 1600,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Mantenemos la lógica que YA FUNCIONA bien:
            if (id.includes("ogl")) {
              return "ogl";
            }
            if (id.includes("framer-motion") || id.includes("motion")) {
              return "framer-motion";
            }

            return "vendor";
          }
        },
      },
    },
  },
});
