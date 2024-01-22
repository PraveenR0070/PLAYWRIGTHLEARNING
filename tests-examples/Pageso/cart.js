exports.gotocartpage =
class gotocartpage{

    constructor(page){
        this.page= page;
        this.Productsincart="//tr[@class='success']//td[2]";

}
async validateproductinCart(ProductName){
    const Productsincart = await this.page.$$(this.Productsincart)
    for (const productss of Productsincart){
        console.log(await productss.textContent())
        if(ProductName === await productss.textContent()){
            return true ;
            break;

        }
    }
}

}