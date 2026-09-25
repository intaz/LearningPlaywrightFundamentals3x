import {test, expect} from '@playwright/test';

test.describe('Login Page', () => {

    test('Valid credentials', async ({page}) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
    });

    test('Invalid password', async ({page}) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
    });

    test.fixme('1checkout with PayPal', async ({ page }) => {
        // never executes
    });

    test.skip('checkout with PayPal', async ({ page }) => {
        // never executes
    });

})

// npx playwright test -g "Login Page"