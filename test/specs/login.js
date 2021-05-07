const LoginPage = require('../pageobjects/login.page');

describe('Login section', () => {
    function browserPause() {
        browser.pause(2000);
    }
    const urlRegister = 'file:///C:/Users/facun/Desktop/Week10-QA/public/register.html';
    const urlLogin = 'file:///C:/Users/facun/Desktop/Week10-QA/public/login.html';

    // Email tests
    it('input with valid credentials', () => {
        browser.url(urlLogin);
        LoginPage.login('facundosa123@gmail.com', 'Facun123');
        expect(LoginPage.errorDivEmail).toBe('');
        browserPause();
    });
    it('input with empty email', () => {
        LoginPage.login('', 'Facun123');
        expect(LoginPage.errorDivEmail).toBe("Email field can't be empty");
        browserPause();
    });
    it('input with email invalid', () => {
        LoginPage.login('fac.gmmail', 'Facun123');
        expect(LoginPage.errorDivEmail).toBe('Email is invalid');
        browserPause();
    });

    // Password tests
    it('Password without lowercase letter', () => {
        LoginPage.login('facundosa123@gmail.com', 'FFFFF');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one lowercase letter');
        browserPause();
    });
    it('password without capital letter ', () => {
        LoginPage.login('facundosa123@gmail.com', 'ffffff');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one uppercase letter');
        browserPause();
    });
    it('input without number', () => {
        LoginPage.login('facundosa123@gmail.com', 'Fffff');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });
    it('password with at least 8 characters', () => {
        LoginPage.login('facundosa123@gmail.com', 'Fffff1');
        expect(LoginPage.errorDivPassword).toBe('Password must have at least 8 characters');
        browserPause();
    });
    it('Button "Create account"', () => {
        LoginPage.buttonRegister();
        if (browser.getUrl() === urlRegister) console.log('-------BUTTON PASS-----');
        else throw new Error('ERROR');
        browserPause();
    });
});
