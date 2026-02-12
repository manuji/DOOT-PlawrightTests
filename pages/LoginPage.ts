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

         // wait until the redirected login form is actually ready
        await this.page.waitForSelector('input[name="user"]', { timeout: 30_000 });
        await this.page.fill('input[name="user"]', username);

        await this.page.waitForSelector('input[name="password"]', { timeout: 30_000 });
        await this.page.fill('input[name="password"]', password);

        await this.page.click('input[type="submit"]');

    }
}


