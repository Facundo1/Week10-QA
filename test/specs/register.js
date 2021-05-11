const RegisterPage = require('../pageobjects/register.page');

describe('Register section', () => {
    function browserPause() {
        browser.pause(3000);
    }
    const urlRegister = 'https://facundo1.github.io/Week10-QA/public/register.html';
    const urlLogin = 'https://facundo1.github.io/Week10-QA/public/login.html';

    // Email Tests
    it('input with empty email', () => {
        browser.url(urlRegister);
        RegisterPage.register('', 'facundo loberse', 'Facun123', 'Facun123');
        expect(RegisterPage.registerErrorDivMail).toBe("Email field can't be empty");
        browserPause();
    });
    it('input with email invalid', () => {
        RegisterPage.register('facundosa123@', 'facundo loberse', 'Facun123', 'Facun123');
        expect(RegisterPage.registerErrorDivMail).toBe('Email is invalid');
        browserPause();
    });

    // Name tests
    it('input name empty', () => {
        RegisterPage.register('facundosa123@gmail.com', '', 'ddsad', 'ddsad');
        expect(RegisterPage.registerErrorDivName).toBe("Name field can't be empty");
        browserPause();
    });
    it('input name invalid', () => {
        RegisterPage.register('facundosa123@gmail.com', 'fac', 'ddsad', 'ddsad');
        expect(RegisterPage.registerErrorDivName).toBe('Full name must contains a space');
        browserPause();
    });

    // Password tests
    it('password without capital letter ', () => {
        RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'ffff', 'ffff');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one uppercase letter');
        browserPause();
    });
    it('password without capital letter ', () => {
        RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'FFFF', 'FFFF');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one lowercase letter');
        browserPause();
    });
    it('password with at least 8 characters', () => {
        RegisterPage.register('facundosa123@gmail.com', 'Keving Mariano', 'Myp123', 'Pass12');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must have at least 8 characters');
        browserPause();
    });
    it('password without number', () => {
        RegisterPage.register('facundosa123@gmail.com', 'Luqueta Sapen', 'Mypassword', 'Facundol');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });

    //Password confirm tests
    it('input confirm password empty', () => {
        RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'Facundo123', '');
        expect(RegisterPage.registerErrorDivConfirmPassword).toBe("confirm password field can't be empty");
        browserPause();
    });
    it('input confirm password not match with password', () => {
        RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'Facundo123', 'FFFFF');
        expect(RegisterPage.registerErrorDivConfirmPassword).toBe('passwords must match');
        browserPause();
    });

    // register with valid credentials
    it('inputs with valid credentials', () => {
        RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'Facun123', 'Facun123');
        expect(RegisterPage.registerErrorDivMail).toBe('');
        browserPause();
    });

    /*     //Reset button
    it('Reset form test', () => {
        RegisterPage.resetForm();
        expect(RegisterPage.inputEmail).toBe('');
        browserPause();
    }); */

    // Back To login
    it('Back to login link test', () => {
        RegisterPage.BackToLogin();
        expect(browser).toHaveUrl(urlLogin);
        browserPause();
    });
});
