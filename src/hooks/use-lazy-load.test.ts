import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useLazyImage, useLazyLoad } from './use-lazy-load';

describe('useLazyLoad', () => {
  beforeEach(() => {
    // use global MockIntersectionObserver in src/test/setup.ts
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useLazyLoad());

    expect(result.current.isIntersecting).toBe(false);
    expect(result.current.ref.current).toBeNull();
  });

  it('should create IntersectionObserver with default options', () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    renderHook(() => useLazyLoad({ externalRef }));

    const createdObserver = (global as any).__createdIntersectionObserver();
    expect(typeof createdObserver.callback).toBe('function');
    expect(createdObserver.options).toEqual({
      threshold: 0.1,
      rootMargin: '50px',
    });
  });

  it('should create IntersectionObserver with custom options', () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    renderHook(() =>
      useLazyLoad({
        threshold: 0.5,
        rootMargin: '100px',
        triggerOnce: false,
        externalRef,
      })
    );

    const createdObserver = (global as any).__createdIntersectionObserver();
    expect(typeof createdObserver.callback).toBe('function');
    expect(createdObserver.options).toEqual({
      threshold: 0.5,
      rootMargin: '100px',
    });
  });

  it('should trigger once by default', async () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    const { result } = renderHook(() => useLazyLoad({ externalRef }));

    // Simulate intersection
    await act(async () => {
      const createdObserver = (global as any).__createdIntersectionObserver();
      expect(createdObserver).not.toBeNull();
      expect(createdObserver.observe).toHaveBeenCalledWith(element);
      createdObserver.callback([{ isIntersecting: true }]);
      await Promise.resolve();
    });

    expect(result.current.isIntersecting).toBe(true);
    // ensure further intersections don't change state when triggerOnce is true
    await act(async () => {
      const createdObserver = (global as any).__createdIntersectionObserver();
      createdObserver.callback([{ isIntersecting: false }]);
      await Promise.resolve();
    });
    expect(result.current.isIntersecting).toBe(true);
  });

  it('should trigger multiple times when triggerOnce is false', async () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    const { result } = renderHook(() => useLazyLoad({ triggerOnce: false, externalRef }));

    // First intersection
    await act(async () => {
      const createdObserver = (global as any).__createdIntersectionObserver();
      createdObserver.callback([{ isIntersecting: true }]);
      await Promise.resolve();
    });

    expect(result.current.isIntersecting).toBe(true);
    const createdObserver = (global as any).__createdIntersectionObserver();
    expect(createdObserver.disconnect).not.toHaveBeenCalled();

    // Second intersection (exit)
    await act(async () => {
      const createdObserver = (global as any).__createdIntersectionObserver();
      createdObserver.callback([{ isIntersecting: false }]);
      await Promise.resolve();
    });

    expect(result.current.isIntersecting).toBe(false);
  });

  it('should observe element when ref is available', () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    renderHook(() => useLazyLoad({ externalRef }));

    const createdObserver = (global as any).__createdIntersectionObserver();
    expect(createdObserver.observe).toHaveBeenCalledWith(element);
  });

  it('should disconnect observer on unmount', () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    const { unmount } = renderHook(() => useLazyLoad({ externalRef }));

    unmount();

    const createdObserver = (global as any).__createdIntersectionObserver();
    expect(createdObserver.disconnect).toHaveBeenCalled();
  });
});

describe('useLazyImage', () => {
  beforeEach(() => {
    // rely on global MockIntersectionObserver from src/test/setup.ts
    // Image mock is provided globally in src/test/setup.ts, accessible via global.__createdImage
  });

  it('should initialize with placeholder', () => {
    const { result } = renderHook(() => useLazyImage('test.jpg', 'placeholder.jpg'));

    expect(result.current.src).toBe('placeholder.jpg');
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.hasError).toBe(false);
  });

  it('should load image when intersecting', () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    const { result } = renderHook(() => useLazyImage('test.jpg', undefined, externalRef));

    // Simulate intersection
    act(() => {
      const createdObserver = (global as any).__createdIntersectionObserver();
      createdObserver.callback([{ isIntersecting: true }]);
    });

    // Simulate successful load
    act(() => {
      const createdImage = (global as any).__createdImage();
      if (createdImage && typeof createdImage.onload === 'function') {
        createdImage.onload(new Event('load') as any);
      }
    });

    expect(result.current.isLoaded).toBe(true);
    expect(result.current.hasError).toBe(false);
  });

  it('should handle image load error', () => {
    const element = document.createElement('div');
    const externalRef = { current: element } as React.RefObject<HTMLElement>;
    const { result } = renderHook(() => useLazyImage('invalid.jpg', undefined, externalRef));

    // Simulate intersection
    act(() => {
      const createdObserver = (global as any).__createdIntersectionObserver();
      createdObserver.callback([{ isIntersecting: true }]);
    });

    // Simulate error
    act(() => {
      const createdImage = (global as any).__createdImage();
      if (createdImage && typeof createdImage.onerror === 'function') {
        createdImage.onerror(new Event('error') as any);
      }
    });

    expect(result.current.hasError).toBe(true);
    expect(result.current.isLoaded).toBe(false);
  });
});
