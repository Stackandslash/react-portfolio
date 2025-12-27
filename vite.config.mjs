import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-portfolio/',
  esbuild: {
    jsx: 'automatic',
    loader: 'jsx',
    include: /src\/.*\.(js|jsx)$/,
  },
  plugins: [react()],
});
