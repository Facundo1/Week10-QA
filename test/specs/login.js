const LoginPage = require('../pageobjects/login.page');

describe('Login section', () => {
    function browserPause() {
        browser.pause(3000);
    }
    const urlRegister = 'https://facundo1.github.io/Week10-QA/public/register.html';
    const urlLogin = 'https://facundo1.github.io/Week10-QA/public/login.html';

    describe('Email tests', () => {
        it('input with empty email', () => {
            browser.url(urlLogin);
            LoginPage.login('', 'Facun123');
            expect(LoginPage.errorDivEmail).toBe("Email field can't be empty");
            browserPause();
        });
        it('input with email invalid', () => {
            LoginPage.login('fac.gmmail', 'Facun123');
            expect(LoginPage.errorDivEmail).toBe('Email is invalid');
            browserPause();
        });
    });

    describe('password tests', () => {
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
    });

    describe('button and valid tests', () => {
        it('input with valid credentials', () => {
            LoginPage.login('facundosa123@gmail.com', 'Facun123');
            expect(LoginPage.errorDivEmail).toBe('');
            browserPause();
        });

        //Go to register link
        it('Button "Create account" to go to register', () => {
            LoginPage.buttonRegister();
            if (browser.getUrl() === urlRegister);
            else throw new Error('ERROR');
            browserPause();
        });
    });
});
