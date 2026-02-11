import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

type AuthFixtures = {
    loginAsUser: () => Promise<void>;
};

export const test = base.extend<AuthFixtures>({
    loginAsUser: async ({page}, use) => {
        const loginPage = new LoginPage(page);

        //Navigate to login page and perform login
        await loginPage.goto();
        await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

        //Make the login function available to tests
        await use(async () => {
            await loginPage.goto();
            await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);     
        });

        
    },
});


//In future check out Playwright's storage state feature to keep the 
// login session across tests without needing to log in before each test. 