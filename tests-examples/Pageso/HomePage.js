exports.HomePage=
class HomePage{

constructor(page){
this.page=page;
this.productslist="//div[@id='tbodyid']//div//div//h4//a";
this.addtocart="//a[@class='btn btn-success btn-lg']";
this.cartbtn="//a[@id='cartur']";
}
async addproductocart(Productname){
const productslist=await this.page.$$(this.productslist);
for(const product of productslist){
    console.log(product.textcontent);
    if(Productname === await product.textContent()){
        await product.click();
        break;
    }
}
await this.page.on('dialog',async dialog=>{
if(dialog.message().includes('added')){
    await dialog.accept();
}

})
await this.page.locator(this.addtocart).click();
}
async gotocart(){
    await this.page.locator(this.cartbtn).click();
}

}