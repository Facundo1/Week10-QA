const RegisterPage = require('../pageobjects/register.page');

describe('Register section', () => {
    function browserPause() {
        browser.pause(2000);
    }
    const urlRegister = 'https://facundo1.github.io/Week10-QA/public/register.html';
    const urlLogin = 'https://facundo1.github.io/Week10-QA/public/register.html';

    // Email Tests
    it('inputs with valid credentials', () => {
        browser.url(urlRegister);
        RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'Facun123', 'Facun123');
        expect(RegisterPage.registerErrorDivMail).toBe('');
        browserPause();
    });
    it('input with empty email', () => {
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
        expect(RegisterPage.registerErrorDivName).toBe('Full name must contains a space');
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
    it('password without number', () => {
        RegisterPage.register('facundosa123@gmail.com', 'Luqueta Sapen', 'Facundol', 'Facundol');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });
    it('password with at least 8 characters', () => {
        RegisterPage.register('facundosa123@gmail.com', 'Keving Mariano', 'Pass12', 'Pass12');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must have at least 8 characters');
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
    it('Button "Create account"', () => {
        RegisterPage.buttonRegister();
        if (browser.getUrl() === urlLogin) console.log('-------BUTTON PASS-----');
        else throw new Error('ERROR');
        browserPause();
    });
});
