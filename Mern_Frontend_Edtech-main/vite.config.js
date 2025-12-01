import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 // if you want to serve from a different directory like 'public'
  server: {
    port: 5173,
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'],
  },
  define: {
    global: 'window',
  },
});

