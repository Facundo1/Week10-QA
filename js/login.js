var emailInput = document.getElementById('login-input-email')
var passwordInput = document.getElementById('login-input-password')
var loginButton = document.getElementById('login-button')
var infoDiv = document.getElementById('login-validation-div')
var infoDivMail = document.getElementById('mail-validation-div')
var infoDivPassword = document.getElementById('password-validation-div')
var errorMailMessageBlur = ''
var errorPasswordMessageBlur = ''
var errorMessagesValidationsOk = ''


emailInput.addEventListener("blur", validateBlurEmailText)
passwordInput.addEventListener("blur", validateBlurPasswordText)
emailInput.addEventListener("focus", validateFocusEmailText)
passwordInput.addEventListener("focus", validateFocusPasswordText)
loginButton.addEventListener('click', validationsOk)

function validateBlurEmailText() {
    // Validate if the  email input contains text         
    if (emailInput.value === "" || emailInput.value === null) {
        errorMailMessageBlur = ("Email field can't be empty")
        infoDivMail.style.display = "block"
        infoDivMail.style.color = "red"
        infoDivMail.innerText = errorMailMessageBlur
        return;
    }
    if (!isEmail(emailInput.value)) {
        errorMailMessageBlur = ("Email is invalid")
        infoDivMail.style.display = "block"
        infoDivMail.style.color = "red"
        infoDivMail.innerText = errorMailMessageBlur
        return
    }
}

function validateFocusEmailText() {
    // Validate if the  email input contains text         
    if (emailInput.value === "" || emailInput.value === null) {
        infoDivMail.style.display = "none"
        return;
    }
    if (!isEmail(emailInput.value)) {
        infoDivMail.style.display = "none"
        return
    }
}

function validateBlurPasswordText() {
    // Validate if the  email input contains text 
    if (passwordInput.value === "" || passwordInput.value === null) {
        errorPasswordMessageBlur = ("Password field can't be empty")
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = errorPasswordMessageBlur
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        errorPasswordMessageBlur = ("Password must contain at least one lowercase letter")
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = errorPasswordMessageBlur
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        errorPasswordMessageBlur = ("Password must contain at least one uppercase letter")
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = errorPasswordMessageBlur
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        errorPasswordMessageBlur = ("Password must contain at least one number ")
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = errorPasswordMessageBlur
        return;
    }
    if (passwordInput.value.length < 8) {
        errorPasswordMessageBlur = ("Password must have at least 8 characters")
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = errorPasswordMessageBlur
        return;
    }
}

function validateFocusPasswordText() {
    // Validate if the  email input contains text 
    if (passwordInput.value === "" || passwordInput.value === null) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.length >= 8) {
        infoDivPassword.style.display = "none"
        return;
    }

}

function validationsOk() {
    // Validate if the  email input contains text         
    if (emailInput.value === "" || emailInput.value === null) {

        return;
    }
    if (!isEmail(emailInput.value)) {

        return
    }

    // Validate if the  email input contains text 
    if (passwordInput.value === "" || passwordInput.value === null) {
        return
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {

        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {

        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {

        return;
    }
    if (passwordInput.value.length < 8) {

        return;
    }
    else {
        errorMessagesValidationsOk = ("Logged Succesfully ")
        infoDiv.style.display = "block"
        infoDiv.style.color = "green"
        infoDiv.innerText = errorMessagesValidationsOk
        return;
    }

}

//function validation mail
function isEmail(email) {
    //test return a boolean
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}





