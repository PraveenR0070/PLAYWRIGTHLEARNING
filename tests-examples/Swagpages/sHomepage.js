exports.products=
class products{
constructor(page){
    this.page=page;
    
    this.names='div.inventory_item_name';
    this.addbtn="(//div[@class='inventory_list'])//div//div//button";
    this.addtocart='button.btn_primary';
    this.backbtn='button.back';

}
async prods(productname){
const products=await this.page.$$(this.names);
for(const pro of products){
    await console.log(pro.textContent())
    if(productname === await pro.textContent()){
       await pro.click();
       break;

       
    }
}
await this.page.click(this.addtocart);
await this.page.click(this.backbtn);
}

}