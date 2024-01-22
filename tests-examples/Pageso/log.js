exports.loginpage=
class loginpage{

    constructor(page){
        this.page=page;
        this.loginlink='#login2';
        this.username='#loginusername';
        this.pass='#loginpassword';
        this.loginbtn="//button[@onclick='logIn()']";
    }
    async gotologinpage(){
        await this.page.goto('https://www.demoblaze.com/');

    }
    async login(username, password){
    await this.page.locator(this.loginlink).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.pass).fill(password);
    await this.page.locator(this.loginbtn).click();

    }

}

