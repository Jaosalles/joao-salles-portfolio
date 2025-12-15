import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('homepage renders and has no detected a11y violations', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Dev Portfolio|Senior Frontend Engineer/);

  // Run axe-core analysis using AxeBuilder and fail if violations are present
  const results = await new AxeBuilder({ page }).analyze();
  if (results.violations && results.violations.length > 0) {
    // Attach JSON to the report for easier debugging
    test.info().attachments.push({
      name: 'axe-violations',
      contentType: 'application/json',
      body: JSON.stringify(results, null, 2),
    } as any);
  }
  expect(results.violations || []).toHaveLength(0);
});
