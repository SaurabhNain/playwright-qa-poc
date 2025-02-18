import { test, expect } from '@playwright/test';

test('Verify login with valid and invalid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Attempt login with invalid credentials
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpassword');
  await page.click('button[type="submit"]');

  // Verify error message
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');

  // Attempt login with valid credentials
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // Verify successful login
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});
