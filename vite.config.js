import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // 👇 Replace with your actual repo name
  base: '/myEcommress/',

  build: {
    outDir: 'dist',
  },

  // 👇 This helps React Router handle 404s on GitHub Pages
  server: {
    historyApiFallback: true,
  },
})
