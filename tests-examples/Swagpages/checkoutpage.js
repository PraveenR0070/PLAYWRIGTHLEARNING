exports.checkout=
class checkout{

    constructor(page){
        this.page=page;
        this.checkouticon="//a[@class='shopping_cart_link']"
        this.checkoutproducts='div.inventory_item_name';
        this.checkoutbtn='#checkout';
        
    }

    async checkoutbutton(){
       await this.page.click(this.checkouticon);

    }
    async checkoutpage(productname){
        const chekp =await this.page.$$(this.checkoutproducts);
        console.log('chekp')
        for(const product of chekp){
            if(productname === product.textContent()){
                return true;
                break;
            }

        }

        }
        async checkoutm(){
            await this.page.click(this.checkoutbtn);

        }
    }


