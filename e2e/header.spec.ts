import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('header navigation updates hash and shows sections', async ({ page, context }) => {
  await context.addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  await page.goto('/');
  const projetosButton = page.locator('header').locator('button', { hasText: 'Projetos' });
  await expect(projetosButton).toBeVisible();

  await projetosButton.click();
  await expect(page).toHaveURL(/#projects/);
  await expect(page.locator('#projects')).toBeVisible();

  // a11y scan limited to the projects section
  const results = await new AxeBuilder({ page }).include('#projects').analyze();
  const filtered = (results.violations || []).filter(v => v.id !== 'color-contrast');
  if (results.violations && results.violations.length > 0) {
    test.info().attachments.push({
      name: 'axe-projects-violations',
      contentType: 'application/json',
      body: JSON.stringify(results, null, 2),
    } as any);
  }
  expect(filtered).toHaveLength(0);
});

test('mobile menu toggles and focuses back', async ({ page, context }) => {
  await context.addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');

  const toggle = page.locator('button[aria-label="Toggle menu"]');
  await toggle.click();
  const mobileMenu = page.locator('#mobile-menu');
  await expect(mobileMenu).toBeVisible();

  // Click first menu item (Sobre) inside the mobile menu
  const sobre = mobileMenu.locator('button', { hasText: 'Sobre' });
  await expect(sobre).toBeVisible();
  await sobre.click();
  await expect(page).toHaveURL(/#about/);
  await expect(mobileMenu).toHaveCount(0);

  // Focus should return to toggle button
  await expect(toggle).toBeFocused();
});

test('theme toggle button is present and clickable', async ({ page, context }) => {
  await context.addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  await page.goto('/');

  // Check desktop theme toggle (in PT the aria-label is "Alternar tema")
  const themeToggle = page.locator('header button[aria-label*="Alternar"]').first();
  await expect(themeToggle).toBeVisible();

  // Verify it's clickable (click triggers theme change)
  await themeToggle.click();

  // Check mobile theme toggle
  await page.setViewportSize({ width: 375, height: 800 });
  const menuToggle = page.locator('button[aria-label="Toggle menu"]');
  await menuToggle.click();

  // Check mobile theme toggle (specifically looking for "Alternar tema", not "Alternar idioma")
  const mobileMenu = page.locator('#mobile-menu');
  const mobileThemeToggle = mobileMenu.locator('button[aria-label="Alternar tema"]').first();
  await expect(mobileThemeToggle).toBeVisible();
});
