import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, vi } from 'vitest';

// Mock the useHashNavigation hook
vi.mock('../hooks/useHashNavigation', () => ({
  useHashNavigation: () => ({
    navigateToSection: vi.fn(),
  }),
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {children}
  </BrowserRouter>
);

describe.skip('Header (moved to features/common)', () => {
  // Tests moved to src/features/common/components/Header.test.tsx
});
