const { test,expect }= require('@playwright/test');

test('Home page',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
const pageTitle = await page.title();
console.log('page title is :', pageTitle);
await expect(page).toHaveTitle('OrangeHRM');
const pageURL=page.url();
console.log(pageURL);



await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.close();

})