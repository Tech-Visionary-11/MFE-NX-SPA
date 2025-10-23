/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/navbar',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4201,
    host: 'localhost',
  },
    define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [vue(),tsconfigPaths()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/navbar',
    lib: {
          entry: 'src/main.single-spa.ts', 
          name: 'navbar',      
          formats: ['es'],    
           fileName: () => 'assets/main.single-spa.js',
        },
         rollupOptions: {
          output: {
            chunkFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name][extname]',
            entryFileNames: 'assets/[name].js',
            inlineDynamicImports: false,
          },
        },
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
