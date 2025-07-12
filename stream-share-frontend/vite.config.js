import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // This makes the server listen on 0.0.0.0 (all network interfaces)
    port: 5173, // Or any port you prefer
  },
  plugins: [react()],
})
