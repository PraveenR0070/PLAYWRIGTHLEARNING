exports.loginpage=
class loginpage{

constructor(page){
this.page=page;
this.username='#user-name';
this.pass='#password';
this.logbtn='#login-button';
}
async gotourl(){
  await this.page.goto('https://www.saucedemo.com/')
}
async loginin(Username,password){
    
   //await this.page.goto('https://www.saucedemo.com/')
   await this.page.locator(this.username).fill(Username);
   await this.page.locator(this.pass).fill(password);
   await this.page.click(this.logbtn);

}




}