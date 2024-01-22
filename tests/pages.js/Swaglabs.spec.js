const { test,expect } = require("@playwright/test");

import { loginpage } from "../../tests-examples/Swagpages/login";
import{products} from "../../tests-examples/Swagpages/sHomepage";
import{checkout} from"../../tests-examples/Swagpages/checkoutpage";

test('test',async({page})=>{
    //page=await browser.newPage();
    const log=new loginpage(page);
    await log.gotourl();
    await log.loginin('standard_user','secret_sauce');
    await page.waitForTimeout(1000);
    const prod=new products(page);
     await page.waitForTimeout(1000);
     await prod.prods('Sauce Labs Onesie');
     await page.waitForTimeout(1000);
     await prod.prods('Sauce Labs Bike Light');
    await page.waitForTimeout(2000);
    const checko=new checkout(page);
    await page.waitForTimeout(3000);
    checko.checkoutbutton();
    checko.checkoutpage('Sauce Labs Bike Light');
    await page.waitForTimeout(2000);
    checko.checkoutm();
    await page.waitForTimeout(3000); 
})