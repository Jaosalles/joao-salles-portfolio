import { expect, test } from './fixtures';

test('projects section is visible and lists featured projects', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('text=Projetos em Destaque')).toBeVisible();
  // In PT, the first project is "Plataforma de E-commerce", not "E-commerce Platform"
  // Use a more specific selector to target the heading, not the description
  await expect(page.locator('h3:has-text("Plataforma de E-commerce")')).toBeVisible();

  const violations = await testUtils.runA11yScan('#projects', 'axe-projects-violations');
  expect(violations).toHaveLength(0);
});
