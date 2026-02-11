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

        const userInput = this.page.locator('input[name="user"]');
        await userInput.waitFor({ state: 'visible', timeout: 90000 });
        await userInput.fill(username);

        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[type="submit"]');

    }
}