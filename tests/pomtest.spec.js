import {test,expect} from '@playwright/test';
import { loginpage } from '../tests-examples/Pageso/log'
import { HomePage } from '../tests-examples/Pageso/HomePage';
import{gotocartpage}from'../tests-examples/Pageso/cart';
import{placeorder}from'../tests-examples/Pageso/placeorder';

test('test',async({page})=>{ 
const login = new loginpage(page);
await login.gotologinpage();
await login.login('pavanol','test@123');
await page.waitForTimeout(5000);

const home=new HomePage(page) 
await home.addproductocart("Nexus 6")
await page.waitForTimeout(5000)
await home.gotocart();

const cart=new gotocartpage(page)
await page.waitForTimeout(5000)
const status=await cart.validateproductinCart("Nexus 6");
expect (await status).toBe(true);
await page.waitForTimeout(3000);

const purchase= new placeorder(page)
await purchase.PlaceTheOrder();
await page.waitForTimeout(2000);
await purchase.fillName('praveen');
await page.waitForTimeout(1000);
await purchase.fillcuntry('india');
//await page.waitForTimeout(5000);
await purchase.fillcity('hyderabad');
await page.waitForTimeout(1000);
await purchase.fillcard('928388383');
await page.waitForTimeout(1000);
await purchase.fillmonth('febraury');
await page.waitForTimeout(1000);
await purchase.fillyear('2023');
await purchase.clicksub();
//await page.waitForTimeout(1000);

})

