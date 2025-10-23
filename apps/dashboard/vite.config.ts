/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: __dirname,
    base: '/',
  cacheDir: '../../node_modules/.vite/apps/dashboard',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
    define: { 'process.env.NODE_ENV': '"production"' },
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/dashboard',
     lib: {
      entry: 'src/main.single-spa.tsx', 
      name: 'dashboard',      
      formats: ['es'],    
       fileName: () => 'assets/main.single-spa.js',
    },
     rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js',
      },
    },
    emptyOutDir: true,
    // reportCompressedSize: true,
    // commonjsOptions: {
    //   transformMixedEsModules: true,
    // },
  },
});
