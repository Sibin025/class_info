import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Ensure relative paths for assets
  plugins: [react()],
  server: {
    host: true, // Bind to all interfaces
    port: 3000, // Optional: Specify a port
  },
  build: {
    emptyOutDir: true, // Clears old files in dist on each build
  },
})
