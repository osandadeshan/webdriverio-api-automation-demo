import LoginFunctions from "../functions/login.functions";
import LoginPage from "../pageObjects/login.page"
import HomePage from "../pageObjects/home.page"

describe('Login Test Suite', () => {

    it('Should login with valid credentials', () => {
        LoginPage.open();
        LoginFunctions.login('osanda@mailinator.com', '1qaz2wsx@');
        expect(HomePage.getLoggedInUsername()).toEqual('Osanda Nimalarathna');
        HomePage.clickLogout();
    });

    it('Should not login with invalid credentials', () => {
        LoginPage.open();
        LoginFunctions.login('osanda@mailinator.com', '1qaz2wsx');
        expect(LoginPage.authenticationErrorDiv).toBeExisting();
        expect(LoginPage.authenticationErrorDiv).toHaveTextContaining('Authentication failed.');
    });
});