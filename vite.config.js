import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
  ],
  base: './',
  server: {
    historyApiFallback: true,
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
