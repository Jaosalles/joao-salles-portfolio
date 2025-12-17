import { act, renderHook } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useHashNavigation } from './use-hash-navigation';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {children}
  </BrowserRouter>
);

// Mock window.location
const mockLocation = {
  hostname: 'localhost',
  hash: '',
  replaceState: vi.fn(),
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

describe('useHashNavigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.hostname = 'localhost';
    mockLocation.hash = '';
    // Mock document.getElementById
    vi.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: vi.fn(),
    } as any);
  });

  it('should return navigateToSection function', () => {
    const { result } = renderHook(() => useHashNavigation(), { wrapper });

    expect(result.current.navigateToSection).toBeInstanceOf(Function);
  });

  it('should navigate to section on localhost', () => {
    const { result } = renderHook(() => useHashNavigation(), { wrapper });

    act(() => {
      result.current.navigateToSection('about');
    });

    expect(window.location.hash).toBe('#about');
  });

  it('should navigate to section on GitHub Pages', () => {
    mockLocation.hostname = 'jaosalles.github.io';

    const { result } = renderHook(() => useHashNavigation(), { wrapper });

    act(() => {
      result.current.navigateToSection('projects');
    });

    // Should not update window.location.hash directly for GitHub Pages
    expect(window.location.hash).toBe('');
  });

  it('should scroll to element when hash changes', () => {
    const mockElement = { scrollIntoView: vi.fn() };
    const getElementByIdSpy = vi
      .spyOn(document, 'getElementById')
      .mockReturnValue(mockElement as any);
    const wrapperWithHash = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter
        initialEntries={['/#contact']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <div data-testid="test">{children}</div>
      </MemoryRouter>
    );
    const { rerender } = renderHook(() => useHashNavigation(), {
      wrapper: wrapperWithHash,
    });
    expect(getElementByIdSpy).toHaveBeenCalledWith('contact');
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });
    // noop
  });

  it('should not scroll if element does not exist', () => {
    const getElementByIdSpy = vi.spyOn(document, 'getElementById').mockReturnValue(null);
    const scrollIntoViewSpy = vi.fn();

    const wrapperWithHash = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter
        initialEntries={['/#nonexistent']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <div data-testid="test">{children}</div>
      </MemoryRouter>
    );
    const { rerender } = renderHook(() => useHashNavigation(), {
      wrapper: wrapperWithHash,
    });
    rerender();

    expect(getElementByIdSpy).toHaveBeenCalledWith('nonexistent');
    expect(scrollIntoViewSpy).not.toHaveBeenCalled();
    // noop
  });
});
