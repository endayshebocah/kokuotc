import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan baris ini jika Anda berencana deploy ke GitHub Pages
  // Gantilah 'NAMA_REPOSITORY_ANDA' dengan nama repository GitHub Anda
  // base: '/NAMA_REPOSITORY_ANDA/', 
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000, // Anda bisa mengganti port jika diperlukan
  },
});
