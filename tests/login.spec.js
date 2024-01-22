const {test,expect }=require('@playwright/test')

test('loginpage',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//await page.locator('name=username').click();
//await page.click('name="username"');
await page.fill("//input[@name='username']",'Admin');
await page.fill("//input[@type='password']",'admin123')
await page.click("//button[@type='submit']")
await page.click("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]")
//await page.type('name=username','Admin');
await page.fill("(//input[@class='oxd-input oxd-input--active'])[2]",'viraj');





})

