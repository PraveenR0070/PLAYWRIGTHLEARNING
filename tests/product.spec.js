const {test,expect }=require('@playwright/test')

test('product',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/')
await page.fill('#userEmail','praveen0070@gmail.com')
await page.fill('#userPassword','Telangana@9988')
await page.click('#login');
page.waitForTimeout(2000);
const list =await page.$$('.mb-3')
for(i of list){

    if(i.getcontent().equals('ZARA COAT 3')){
        await page.click("//button[@class='btn w-10 rounded']")

    }
}




});