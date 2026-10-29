import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Served from the root of the custom domain (gotraveleasy.in, see public/CNAME).
// Without the custom domain, build with BASE_PATH=/gotraveleasy/ for
// https://sankalpsingh2704.github.io/gotraveleasy/.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
});
