import { defineConfig } from 'vite';
import { sharedOptimizeDeps, sharedPlugins, sharedResolveConfig } from './shared-vite-config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = process.env.GITHUB_PAGES ? '/joao-salles-portfolio/' : '/';
  
  return {
    // GitHub Pages deployment config
    base,
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      ...sharedPlugins,
      // Plugin para processar caminhos de assets no HTML
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          if (process.env.GITHUB_PAGES) {
            return html
              .replace('href="favicon.ico"', `href="${base}favicon.ico"`)
              .replace('href="manifest.json"', `href="${base}manifest.json"`);
          }
          return html;
        },
      },
    ],
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
  };
});
