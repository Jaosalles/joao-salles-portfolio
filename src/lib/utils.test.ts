import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cn, getBasePath, handleGitHubPagesRouting, isGitHubPages } from './utils';

describe('cn (className utility)', () => {
  it('should merge class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should handle conditional classes', () => {
    expect(cn('class1', true && 'class2', false && 'class3')).toBe('class1 class2');
  });

  it('should handle falsy values', () => {
    expect(cn('class1', null, undefined, '', 'class2')).toBe('class1 class2');
  });

  it('should merge Tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('should handle complex Tailwind merges', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('should handle objects with conditional classes', () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe('class1 class3');
  });

  it('should handle empty input', () => {
    expect(cn()).toBe('');
  });

  it('should handle single class', () => {
    expect(cn('single-class')).toBe('single-class');
  });

  it('should merge conflicting Tailwind utilities correctly', () => {
    expect(cn('flex justify-start', 'justify-center')).toBe('flex justify-center');
  });

  it('should handle responsive classes', () => {
    expect(cn('md:text-lg', 'lg:text-xl')).toBe('md:text-lg lg:text-xl');
  });
});

describe('GitHub Pages utilities', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    // Mock window.location
    delete (window as { location?: Location }).location;
    window.location = { ...originalLocation } as Location;
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  describe('isGitHubPages', () => {
    it('should return true when hostname includes github.io', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'jaosalles.github.io',
      });
      expect(isGitHubPages()).toBe(true);
    });

    it('should return false when hostname does not include github.io', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'localhost',
      });
      expect(isGitHubPages()).toBe(false);
    });

    it('should return false for custom domains', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'example.com',
      });
      expect(isGitHubPages()).toBe(false);
    });
  });

  describe('getBasePath', () => {
    it('should return /joao-salles-portfolio for GitHub Pages', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'jaosalles.github.io',
      });
      expect(getBasePath()).toBe('/joao-salles-portfolio');
    });

    it('should return empty string for non-GitHub Pages', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'localhost',
      });
      expect(getBasePath()).toBe('');
    });
  });

  describe('handleGitHubPagesRouting', () => {
    it('should convert search-based route to normal route on GitHub Pages', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'jaosalles.github.io',
      });
      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: '?/about',
      });
      Object.defineProperty(window.location, 'hash', {
        writable: true,
        value: '',
      });

      const replaceStateSpy = vi.spyOn(window.history, 'replaceState');

      handleGitHubPagesRouting();

      expect(replaceStateSpy).toHaveBeenCalledWith(null, '', 'about');
      replaceStateSpy.mockRestore();
    });

    it('should preserve hash when converting route', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'jaosalles.github.io',
      });
      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: '?/about',
      });
      Object.defineProperty(window.location, 'hash', {
        writable: true,
        value: '#section',
      });

      const replaceStateSpy = vi.spyOn(window.history, 'replaceState');

      handleGitHubPagesRouting();

      expect(replaceStateSpy).toHaveBeenCalledWith(null, '', 'about#section');
      replaceStateSpy.mockRestore();
    });

    it('should not do anything if not on GitHub Pages', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'localhost',
      });
      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: '?/about',
      });

      const replaceStateSpy = vi.spyOn(window.history, 'replaceState');

      handleGitHubPagesRouting();

      expect(replaceStateSpy).not.toHaveBeenCalled();
      replaceStateSpy.mockRestore();
    });

    it('should not do anything if search does not start with ?/', () => {
      Object.defineProperty(window.location, 'hostname', {
        writable: true,
        value: 'jaosalles.github.io',
      });
      Object.defineProperty(window.location, 'search', {
        writable: true,
        value: '?query=test',
      });

      const replaceStateSpy = vi.spyOn(window.history, 'replaceState');

      handleGitHubPagesRouting();

      expect(replaceStateSpy).not.toHaveBeenCalled();
      replaceStateSpy.mockRestore();
    });
  });
});
