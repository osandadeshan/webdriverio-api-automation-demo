import Page from "./page";

class HomePage extends Page {
    get loggedInUsername() {return $("//div[@class='header_user_info']//span");}
    get logoutLink() {return $("//a[@class='logout']");}

    open(){
        super.open('/index.php?controller=my-account');
    }

    getLoggedInUsername(){
        return this.loggedInUsername.getText();
    }

    clickLogout(){
        this.logoutLink.click();
    }
}

export default new HomePage();