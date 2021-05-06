class LoginPage {
    get inputEmail() {
        return $('input[id="loginInputEmail"]');
    }
    get inputPassword() {
        return $('input[id="loginInputPassword"]');
    }
    get btnSubmit() {
        return $('button[id="loginButton"]');
    }
    get btnRegister() {
        return $('a[id="goToRegisterLink"]');
    }

    buttonRegister() {
        this.btnRegister.click();
    }

    login(email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
