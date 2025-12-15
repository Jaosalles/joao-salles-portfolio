import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('projects section is visible and lists featured projects', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('text=Projetos em Destaque')).toBeVisible();
  await expect(page.locator('text=E-commerce Platform')).toBeVisible();

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
