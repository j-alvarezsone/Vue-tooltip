import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: true, // Enable source maps for production
    rollupOptions: {
      plugins: [
        dynamicImportVars({
          // options for the plugin
        }),
      ],
      output: {
        sourcemap: true, // Ensure sourcemaps are enabled for all outputs
      },
    },
    // Additional option to retain class names and function names in production for better debugging
    minify: 'terser', // Use Terser for minification
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
});
