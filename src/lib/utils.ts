import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Check if the application is running on GitHub Pages
 */
export const isGitHubPages = (): boolean => {
  return window.location.hostname.includes('github.io');
};

/**
 * Get the base path for GitHub Pages deployment
 */
export const getBasePath = (): string => {
  return isGitHubPages() ? '/joao-salles-portfolio' : '';
};

/**
 * Handle client-side routing for GitHub Pages
 * Converts hash-based URLs back to normal routes
 */
export const handleGitHubPagesRouting = (): void => {
  if (isGitHubPages() && window.location.search.startsWith('?/')) {
    const path = window.location.search.slice(2); // Remove '?/'
    window.history.replaceState(null, '', path + (window.location.hash || ''));
  }
};
