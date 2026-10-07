    import {test, expect} from '@playwright/test';
    
    test('Shadow DOM Test', async ({page}) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        
        const form = await page.locator('#userName');
        await form.locator('#kils').fill('John');
        await form.locator('#pizza').fill('Margherita');

        //timeout expected as element is inside shadow DOM (closed)
        await page.locator('#training').fill('Concept Test Example');
        await page.locator('#pwd').fill('654321');

        await page.pause();
    
    });