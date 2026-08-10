import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.jpg','**/*.png', '**/*.gif', '**/*.svg'],  // Add this line to handle image formats
});
