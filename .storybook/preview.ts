import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { LanguageProvider } from '../src/features/common/context/LanguageContext';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: 'light',
          value: '#ffffff',
        },

        dark: {
          name: 'dark',
          value: '#1a1a1a',
        }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  },

  decorators: [
    (Story) => React.createElement(
      ThemeProvider,
      {
        attribute: 'class',
        defaultTheme: 'system',
        enableSystem: true,
        enableColorScheme: true,
        disableTransitionOnChange: false,
      },
      React.createElement(
        LanguageProvider,
        null,
        React.createElement(Story)
      )
    ),
  ],
};

export default preview;
