import {test} from '../../fixtures/auth.fixture';
import {expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Smoke Test Suite', () => {

    test('should load dashboard', async ({page, loginAsUser}) => {
      await loginAsUser();
      const heading1 = page.locator('h1.m-3.mb-4');
      await expect(heading1).toHaveText('Dates management');
    });

    test('should display the park data', async ({page, loginAsUser}) => {
        await loginAsUser();
        const response = await page.waitForResponse('**/api/parks');
        expect(response.status()).toBe(200);
        
    });
});