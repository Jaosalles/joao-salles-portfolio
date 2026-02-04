import { defineConfig } from 'vite';
import { sharedOptimizeDeps, sharedPlugins, sharedResolveConfig } from './shared-vite-config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages deployment config
  base: process.env.GITHUB_PAGES ? '/joao-salles-portfolio/' : '/',
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [...sharedPlugins],
  resolve: sharedResolveConfig,
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          router: ['react-router-dom'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    sourcemap: mode === 'development',
    reportCompressedSize: true,
  },
  optimizeDeps: sharedOptimizeDeps,
}));
