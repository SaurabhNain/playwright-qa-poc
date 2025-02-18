import { Page, Locator } from '@playwright/test';

export class DropdownPage {
    private page: Page;
    private dropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOption(value: string) {
        await this.dropdown.selectOption(value);
    }

    async getSelectedValue() {
        return await this.dropdown.inputValue();
    }
}
