import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // penting untuk memastikan asset JS/CSS bisa di-load di Netlify
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
