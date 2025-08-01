import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://anonymada.github.io/e-manasa/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
