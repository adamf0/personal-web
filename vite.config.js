import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
//<meta http-equiv="refresh" content="0; url=/personal-web-adam/" />
export default defineConfig({
  // base: "/personal-web",
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
})