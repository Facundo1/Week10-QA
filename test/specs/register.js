const RegisterPage = require('../pageobjects/register.page');

describe('Register section', () => {
    function browserPause() {
        browser.pause(2000);
    }
    const urlRegister = 'file:///C:/Users/facun/Desktop/Week10-QA/public/register.html';
    const urlLogin = 'file:///C:/Users/facun/Desktop/Week10-QA/public/login.html';

    it('inputs with valid credentials', () => {
        browser.url(urlRegister);
        expect(
            RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'Facun123', 'Facun123')
        ).toBeUndefined();
        browserPause();
    });
    it('input with empty email', () => {
        expect(RegisterPage.register('', 'facundo loberse', 'Facun123', 'Facun123')).toBeUndefined();
        browserPause();
    });
    it('input with email invalid', () => {
        expect(RegisterPage.register('facundosa123@', 'facundo loberse', 'Facun123', 'Facun123')).toBeUndefined();
        browserPause();
    });
    it('input name invalid', () => {
        expect(RegisterPage.register('facundosa123@gmail.com', 'fak', 'ddsad', 'ddsad')).toBeUndefined();
        browserPause();
    });
    it('input password invalid', () => {
        expect(RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'ddsad', 'ddsad')).toBeUndefined();
        browserPause();
    });
    it('input confirm password invalid', () => {
        expect(RegisterPage.register('facundosa123@gmail.com', 'facundo loberse', 'ddsad', 'FDFF')).toBeUndefined();
        browserPause();
    });
    it('all inputs invalids', () => {
        expect(RegisterPage.register('fff.com', 'facun', 'Aaa', 'Fff')).toBeUndefined();
        browserPause();
    });
    it('Button "Create account"', () => {
        RegisterPage.buttonRegister();
        if (browser.getUrl() === urlLogin) console.log('-------BUTTON PASS-----');
        else throw new Error('ERROR');
        browserPause();
    });
});
