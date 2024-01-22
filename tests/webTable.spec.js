const { test,expect } = require("@playwright/test")


test('webtable',async({page})=>{
    //await page.waitForTimeout(5000);
await page.goto('https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html');
await page.waitForTimeout(1000);
const columns = await page.locator('(//tbody)[1]//tr/td'); 
console.log('noof cols',await columns.count());
expect(await columns.count() ).toBe(18);

//expect(await columns.count()).toBe(18);
const rows=await page.locator('(//tbody)[1]//tr');
console.log('no of rows',await rows.count());
expect(await rows.count()).toBe(7);


})