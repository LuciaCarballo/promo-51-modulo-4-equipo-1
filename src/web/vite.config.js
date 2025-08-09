import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/promo-51-modulo-3-equipo-1/",
  plugins: [react()],

  server: {
  open: "/",
  watch: {
      usePolling: true,
    },
  },
});
