const{test,expect}= require("@playwright/test")

test('dumylogin', async ({page}) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator("//input[@name='username']").fill('Admin');
await page.locator("//input[@name='password']").fill('admin.123');
await page.locator('.oxd-button').click();



})