import { test, expect } from '@playwright/test';

// Selectors
const SELECTORS = {
    USERNAME_INPUT: '#username',
    PASSWORD_INPUT: '#password',
    SUBMIT_BUTTON: 'button[type="submit"]',
    ERROR_MESSAGE: '.flash.error',
    SUCCESS_MESSAGE: '.flash.success'
};

// Test data
const TEST_DATA = {
    VALID_USER: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!'
    },
    INVALID_USER: {
        username: 'wronguser',
        password: 'wrongpassword'
    },
    BASE_URL: 'https://the-internet.herokuapp.com/login'
};

test.describe('Form Authentication Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(TEST_DATA.BASE_URL);
    });

    test('should display error message with invalid credentials', async ({ page }) => {
        // Fill in invalid credentials
        await page.fill(SELECTORS.USERNAME_INPUT, TEST_DATA.INVALID_USER.username);
        await page.fill(SELECTORS.PASSWORD_INPUT, TEST_DATA.INVALID_USER.password);
        
        // Submit the form
        await page.click(SELECTORS.SUBMIT_BUTTON);

        // Assert error message
        await expect(page.locator(SELECTORS.ERROR_MESSAGE), 'Error message should be visible')
            .toContainText('Your username is invalid!');
        await expect(page.url()).toContain('/login');
    });

    test('should login successfully with valid credentials', async ({ page }) => {
        // Fill in valid credentials
        await page.fill(SELECTORS.USERNAME_INPUT, TEST_DATA.VALID_USER.username);
        await page.fill(SELECTORS.PASSWORD_INPUT, TEST_DATA.VALID_USER.password);
        
        // Submit the form
        await page.click(SELECTORS.SUBMIT_BUTTON);

        // Assert successful login
        await expect(page.locator(SELECTORS.SUCCESS_MESSAGE), 'Success message should be visible')
            .toContainText('You logged into a secure area!');
        await expect(page.url()).toContain('/secure');
    });
});
