import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'What\'s installed', exact: true }).click();
  await page.getByRole('link', { name: 'Running Tests' }).click();

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});


