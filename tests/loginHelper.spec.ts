import { test, expect, Page } from '@playwright/test';

export class LoginHelper {
    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    private readonly selectors = {
        username: '#username',
        password: '#password',
        loginButton: 'button[type="submit"]'
    };

    async goToLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async verifyLoginPageElements() {
        await expect(this.page.locator(this.selectors.username)).toBeVisible();
        await expect(this.page.locator(this.selectors.password)).toBeVisible();
        await expect(this.page.locator(this.selectors.loginButton)).toBeVisible();
    }
}

