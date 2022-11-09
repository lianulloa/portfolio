import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgrPluging from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgrPluging()],
  base: "/portfolio/",
  build: {
    outDir: "build"
  },
  server: {
    open: true
  }
})