/// <reference types="vitest" />
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import { sharedOptimizeDeps, sharedPlugins } from './shared-vite-config';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: sharedPlugins,
  optimizeDeps: sharedOptimizeDeps,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // Exclude E2E tests (Playwright) and node_modules from Vitest's collection
    exclude: ['e2e/**', 'node_modules/**'],
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        'dist/',
        '**/*.config.*',
        'src/main.tsx',
        'src/vite-env.d.ts',
      ],
      // No built-in threshold enforcement here, use scripts/check-coverage.js in CI
      // Still useful to generate outputs for CI
    },
    projects: [
      {
        name: 'unit',
        plugins: sharedPlugins,
        resolve: {
          alias: {
            '@': path.resolve(__dirname, './src'),
          },
        },
        test: {
          globals: true,
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          exclude: ['e2e/**', 'node_modules/**', '**/*.stories.tsx'],
          setupFiles: ['./src/test/setup.ts'],
          css: true,
        },
      },
      {
        name: 'storybook',
        plugins: [
          ...sharedPlugins,
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        resolve: {
          alias: {
            '@': path.resolve(__dirname, './src'),
          },
        },
        test: {
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
          globals: true,
          environment: 'jsdom',
        },
      },
    ],
  },
});
