import { test, expect } from '@playwright/test';

test('Verify mouse hover functionality', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  // Hover over the first image
  const firstImage = page.locator('div.figure').nth(0);
  await firstImage.hover();

  // Verify the profile info is displayed
  const profileInfo = page.locator('div.figure:nth-child(1) > div > h5');
  await expect(profileInfo).toContainText('user1');

  // Hover over the second image
  const secondImage = page.locator('div.figure').nth(1);
  await secondImage.hover();

  // Verify the profile info is displayed
  const secondProfileInfo = page.locator('div.figure:nth-child(2) > div > h5');
  await expect(secondProfileInfo).toContainText('user2');
});
