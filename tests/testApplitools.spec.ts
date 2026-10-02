import {test, expect} from '@playwright/test';
import {parseAmount} from '../utils/amount';

test('Calculate total amount spent this month', async ({page}) => {
    await page.goto('https://demo.applitools.com/');
    await page.locator('#username').fill('Admin');
    await page.locator('#password').fill('Password@123');
    await page.locator('#log-in').click();

    await page.waitForURL('https://demo.applitools.com/app.html');

    const rows = page.locator('table.table-padded tbody tr');

    let totalIncome = 0;
    let totalSpent = 0;

    for (let i = 0; i < await rows.count(); i++) {
        const amountText = (await rows.nth(i).locator('td:nth-child(5) span').innerText()).trim();
        const {type, value} = parseAmount(amountText);

        if (type === 'spent') {
            totalSpent += value;
        } else {
            totalIncome += value;
        }
    }

    const amountLeft = totalIncome - totalSpent;

    console.log(`Total income this month: ${totalIncome.toFixed(2)} USD`);
    console.log(`Total amount spent this month: ${totalSpent.toFixed(2)} USD`);
    console.log(`Total amount left after spending this month: ${amountLeft.toFixed(2)} USD`);

    expect(amountLeft).toBeCloseTo(1996.22, 2);
});