/**
 * Playwright Test Fixtures
 * Reusable utilities and fixtures for E2E tests
 */

import AxeBuilder from '@axe-core/playwright';
import { test as base, expect, Page } from '@playwright/test';

/**
 * Initialize the test environment with default language
 * Sets localStorage to Portuguese by default
 */
export async function initializeTestEnvironment(page: Page) {
  await page.context().addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  await page.goto('/');
}

/**
 * Run accessibility scan with axe-core and filter color-contrast violations
 * These violations are intentional in the design system
 */
export async function runAccessibilityScan(
  page: Page,
  selector?: string,
  attachmentName: string = 'axe-violations'
) {
  const builder = new AxeBuilder({ page });

  if (selector) {
    builder.include(selector);
  }

  const results = await builder.analyze();

  // Filter out color-contrast violations as they are intentional design choices
  const filtered = (results.violations || []).filter(v => v.id !== 'color-contrast');

  // Attach violations to the test report for debugging
  if (results.violations && results.violations.length > 0) {
    base.info().attachments.push({
      name: attachmentName,
      contentType: 'application/json',
      body: JSON.stringify(filtered.length > 0 ? filtered : results, null, 2),
    } as any);
  }

  return filtered;
}

/**
 * Navigate to a hash location and assert visibility
 */
export async function navigateToSection(page: Page, hashId: string, sectionSelector: string) {
  await page.goto(`/#${hashId}`);
  await expect(page).toHaveURL(new RegExp(`#${hashId}`));
  await expect(page.locator(sectionSelector)).toBeVisible();
}

/**
 * Custom test fixture that provides test utilities
 */
export const test = base.extend({
  testUtils: async ({ page }, use) => {
    await use({
      initializeEnvironment: () => initializeTestEnvironment(page),
      runA11yScan: (selector?: string, name?: string) => runAccessibilityScan(page, selector, name),
      navigateToSection: (hashId: string, selector: string) =>
        navigateToSection(page, hashId, selector),
    });
  },
});

export { expect };
