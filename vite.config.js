import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/emburr/',
  build: {
    outDir: 'emburr'
  },
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
})