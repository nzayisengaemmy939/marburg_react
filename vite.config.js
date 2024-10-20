import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,  // Optimizes GIFs
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,  // Optimizes PNGs
      },
      mozjpeg: {
        quality: 70,  // Set JPEG quality (0-100)
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,  // Converts images to WebP with quality setting
      },
    }),
  ],
});
