exports.placeorder=
class placeorder{
constructor(page){
this.page=page;
this.placeorderbtn="//button[@class='btn btn-success']";
this.name='#name';
this.cuntry='#country';
this.city='#city';
this.card='#card';
this.month='#month';
this.Year='#year';
this.purchase="//button[@onclick='purchaseOrder()']";
}
async PlaceTheOrder(){
await this.page.locator(this.placeorderbtn).click();

}
async fillName(Name){
    await this.page.locator(this.name).fill(Name)
}
async fillcuntry(Cuntry){
    await this.page.locator(this.cuntry).fill(Cuntry)
}
async fillcity(Cityy){
    await this.page.locator(this.city).fill(Cityy)
}
async fillcard(Cardd){
    await this.page.locator(this.card).fill(Cardd)
}
async fillmonth(Monthh){
    await this.page.locator(this.month).fill(Monthh)
}
async fillyear(Yearr){
    await this.page.locator(this.Year).fill(Yearr)
}
async clicksub(){
    await this.page.locator(this.purchase).click();
}

}