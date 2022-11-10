import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgrPluging from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgrPluging()],
  base: "/portfolio/",
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "404": resolve(__dirname, "404.html")
      }
    }
  },
  server: {
    open: true
  }
})