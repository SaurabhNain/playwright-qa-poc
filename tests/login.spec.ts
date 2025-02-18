import { test, expect, Page } from '@playwright/test';
import { LoginHelper } from './loginHelper.spec';

test('Verify login page elements', async ({ page }) => {
    const loginHelper = new LoginHelper(page);
    await loginHelper.goToLoginPage();
    await loginHelper.verifyLoginPageElements();
});