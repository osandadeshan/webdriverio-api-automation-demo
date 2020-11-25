import LoginPage from "../pageObjects/login.page"

class LoginFunctions{
    login(username,password){
        LoginPage.setEmail(username);
        LoginPage.setPassword(password);
        LoginPage.clickSignIn();
    } 
}

export default new LoginFunctions();