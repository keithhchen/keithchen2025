import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      strict: false,
    },
    proxy: {
      '/WW_verify_5W7Mk9sXte5PYm8I.txt': {
        target: 'file://',
        changeOrigin: true,
        rewrite: () => '/WW_verify_5W7Mk9sXte5PYm8I.txt'
      }
    }
  }
});
