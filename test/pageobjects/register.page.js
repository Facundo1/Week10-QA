class RegisterPage {
    get inputEmail() {
        return $('input[id="registerInputEmail"]');
    }
    get inputName() {
        return $('input[id="registerInputName"]');
    }
    get inputPassword() {
        return $('input[id="registerInputPassword"]');
    }
    get inputConfirmPassword() {
        return $('input[id="registerInputConfirmPassword"]');
    }
    get btnSubmit() {
        return $('button[id="registerButton"]');
    }
    get btnRegister() {
        return $('a[id="BackToLoginLink"]');
    }

    buttonRegister() {
        this.btnRegister.click();
    }

    register(email, password, name, confirmPass) {
        this.inputEmail.setValue(email);
        this.inputName.setValue(name);
        this.inputPassword.setValue(password);
        this.inputConfirmPassword.setValue(confirmPass);
        this.btnSubmit.click();
    }
}

module.exports = new RegisterPage();
