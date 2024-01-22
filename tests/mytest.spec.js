import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 
  await page.getByRole('link', { name: 'Nokia lumia 1520' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Place order').getByLabel('Close').click();
});