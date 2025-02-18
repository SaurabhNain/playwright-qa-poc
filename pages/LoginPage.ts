import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private loginForm: Locator;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginForm = page.locator('#login');
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async verifyElements() {
        await this.loginForm.isVisible();
        await this.usernameInput.isVisible();
        await this.passwordInput.isVisible();
        await this.loginButton.isVisible();
    }
}
