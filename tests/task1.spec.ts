import {test, expect} from '@playwright/test';

test('Testing academy', async ({ page }) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    let email = page.locator("//input[@id='email']");
    let password = page.locator("//input[@id='password']");
    let rememberMe = page.locator("//input[@type='checkbox']");
    let loginButton = page.locator("//button[@data-testid='login-button']");

    await email.fill("ggg@yyy.com");
    await password.fill("123456");
    await rememberMe.click();
    await loginButton.click();

    await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/multiple_element_filter?email=ggg%40yyy.com&password=123456&remember=yes#login-success');
})