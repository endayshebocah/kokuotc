import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Menetapkan target build ke 'esnext' memungkinkan penggunaan
    // fitur JavaScript modern seperti import.meta.env tanpa masalah.
    target: 'esnext'
  }
});
