import '@testing-library/jest-dom';
import { vi } from 'vitest';

/*
  Tests setup uses dynamic mocks and we prefer explicit-any here for brevity and
  to keep the mocks straightforward. Disable the rule for this file.
*/
/* eslint-disable @typescript-eslint/no-explicit-any */

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock IntersectionObserver
let createdIntersectionObserver: any = null;
class MockIntersectionObserver {
  callback: any = null;
  options: any = null;
  observe: any;
  unobserve: any;
  disconnect: any;
  constructor(callback?: any, options?: any) {
    this.callback = callback;
    this.options = options;
    // Use vi.fn if available so tests can assert calls
    this.observe = vi && vi.fn ? vi.fn() : () => {};
    this.unobserve = vi && vi.fn ? vi.fn() : () => {};
    this.disconnect = vi && vi.fn ? vi.fn() : () => {};
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    createdIntersectionObserver = this;
  }
}
(global as any).IntersectionObserver = MockIntersectionObserver as any;
(global as any).__createdIntersectionObserver = () => createdIntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock Image constructor for tests that interact with image loading
let createdImage: any = null;
class MockImage {
  onload: any = null;
  onerror: any = null;
  src = '';
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    createdImage = this;
  }
}
(global as any).Image = MockImage as any;

// Expose getter for tests if needed
(global as any).__createdImage = () => createdImage;
