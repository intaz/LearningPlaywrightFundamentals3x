import {test, expect} from '@playwright/test';

test('Hover Test', async ({page}) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();

    let output : string = await page.locator('#output').innerText();
    expect(output).toContain('Wi-Fi');
    await page.pause();

});