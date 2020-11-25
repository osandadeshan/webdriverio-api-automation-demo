import Page from "./page";

class LoginPage extends Page {
    get emailField() { return $('#email');}
    get passwordField() { return $('#passwd');}
    get signInBtn() { return $('#SubmitLogin');}
    get authenticationErrorDiv() {return $("//div[@class='alert alert-danger']//li");}

    open(){
        super.open('/index.php?controller=authentication&back=my-account');
    }

    setEmail(email){
        this.emailField.setValue(email);
    }

    setPassword(password){
        this.passwordField.setValue(password);
    }

    clickSignIn(){
        this.signInBtn.click();
    }
}

export default new LoginPage();