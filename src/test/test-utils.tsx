import { LanguageProvider } from '@/features/common/context/LanguageContext';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

/**
 * Custom render function that wraps components with common providers
 * Used for testing components that depend on LanguageProvider and/or Router
 */

interface RenderWithProvidersOptions extends Omit<RenderOptions, 'wrapper'> {
  includeRouter?: boolean;
}

/**
 * Render with LanguageProvider
 * Sets language to 'pt' by default
 */
export const renderWithLanguage = (ui: ReactNode, options?: RenderWithProvidersOptions) => {
  localStorage.setItem('language', 'pt');
  return render(ui, {
    wrapper: ({ children }) => <LanguageProvider>{children}</LanguageProvider>,
    ...options,
  });
};

/**
 * Render with LanguageProvider and BrowserRouter
 * Useful for components that use navigation
 */
export const renderWithProviders = (
  ui: ReactNode,
  { includeRouter = false, ...options }: RenderWithProvidersOptions = {}
) => {
  localStorage.setItem('language', 'pt');

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <LanguageProvider>
      {includeRouter ? (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          {children}
        </BrowserRouter>
      ) : (
        children
      )}
    </LanguageProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

/**
 * Setup function to run before each test
 * Initializes localStorage with default language
 */
export const setupTestEnvironment = () => {
  localStorage.setItem('language', 'pt');
};

// Re-export everything from testing-library for convenience
export * from '@testing-library/react';
