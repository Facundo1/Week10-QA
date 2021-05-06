const LoginPage = require('../pageobjects/login.page');

describe('Login section', () => {
    function browserPause() {
        browser.pause(2000);
    }
    const urlRegister = 'file:///C:/Users/facun/Desktop/Week10-QA/public/register.html';
    const urlLogin = 'file:///C:/Users/facun/Desktop/Week10-QA/public/login.html';

    it('input with valid credentials', () => {
        browser.url(urlLogin);
        expect(LoginPage.login('facundosa123@gmail.com', 'Facun123')).toBeUndefined();
        browserPause();
    });
    it('input with empty email', () => {
        expect(LoginPage.login('', 'Facun123')).toBeUndefined();
        browserPause();
    });
    it('input with email invalid', () => {
        expect(LoginPage.login('fac@gmail', 'Facun123')).toBeUndefined();
        browserPause();
    });
    it('input password invalid', () => {
        expect(LoginPage.login('facundosa123@gmail.com', 'ffffff')).toBeUndefined();
        browserPause();
    });
    it('input Password and username invalids', () => {
        expect(LoginPage.login('fff@.com', 'dddd')).toBeUndefined();
        browserPause();
    });
    it('Button "Create account"', () => {
        LoginPage.buttonRegister();
        if (browser.getUrl() === urlRegister) console.log('-------BUTTON PASS-----');
        else throw new Error('ERROR');
        browserPause();
    });
});
