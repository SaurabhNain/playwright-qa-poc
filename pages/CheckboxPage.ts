import { Page, Locator } from '@playwright/test';

export class CheckboxPage {
    private page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
        this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }
}
