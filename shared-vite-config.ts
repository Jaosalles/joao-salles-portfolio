import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * Shared Vite configuration used by both vite.config.ts and vitest.config.ts
 * This ensures consistent alias resolution across both build and test environments
 */

export const sharedResolveConfig = {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
};

// Use tsconfigPaths to resolve aliases from tsconfig.json
// This is the recommended approach for proper alias resolution in vitest
export const sharedPlugins = [
  tsconfigPaths({
    root: '.',
    projects: ['./tsconfig.app.json'],
  }),
  react(),
];

export const sharedOptimizeDeps = {
  include: ['react', 'react-dom', 'framer-motion'],
};

export const sharedCSSConfig = true;
