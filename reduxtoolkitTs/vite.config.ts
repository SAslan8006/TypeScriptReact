import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Eğer Server port değiştirmek istersen burayı kullanabilirsin
  server: {
    open: true,
    port: 3000
  }
})
