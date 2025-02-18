import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify login page elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyElements();
});