import {expect, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(process.env.BASE_URL!);
    }

    async login(username: string, password: string) {

        await this.page.getByText('Log in with IDIR').click();

        await this.page.waitForLoadState('networkidle');

        await this.page.waitForTimeout(120000); // Wait for 120 seconds to ensure the login page is fully loaded
        await this.page.fill('input[name="user"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[type="submit"]');

    }
}