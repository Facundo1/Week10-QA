var infoDivMail = document.getElementById('register-mail-validation-div')
var infoDivName = document.getElementById('register-name-validation-div')
var infoDivPassword = document.getElementById('register-password-validation-div')
var infoDivConfirmPassword = document.getElementById('register-cpassword-validation-div')
var infoDiv = document.getElementById('register-validation-div')
var registerButton = document.getElementById('register-button')
var errorMailMessageBlur = ''
var errorNameMessageBlur = ''
var errorPasswordMessageBlur = ''
var errorConfirmPasswordMessageBlur = ''
var errorMessagesValidationsOk = ''

var emailInput = document.getElementById('register-input-email')
var nameInput = document.getElementById('register-input-name')
var passwordInput = document.getElementById('register-input-password')
var confirmPasswordInput = document.getElementById('register-input-confirm-password')

emailInput.addEventListener("blur", validateBlurEmailText)
nameInput.addEventListener("blur", validateBlurNameText)
passwordInput.addEventListener("blur", validateBlurPasswordText)
confirmPasswordInput.addEventListener("blur", validateBlurConfirmPasswordText)

emailInput.addEventListener("focus", validateFocusEmailText)
nameInput.addEventListener("focus", validateFocusNameText)
passwordInput.addEventListener("focus", validateFocusPasswordText)
confirmPasswordInput.addEventListener("focus", validateFocusConfirmPasswordText)

registerButton.addEventListener('click', validationsOk)

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
    infoDivMail.style.display = "none"

}

function validateBlurNameText() {
    // Validate if the  email input contains text         
    if (nameInput.value === "" || nameInput.value === null) {
        errorNameMessageBlur = ("Name field can't be empty")
        infoDivName.style.display = "block"
        infoDivName.style.color = "red"
        infoDivName.innerText = errorNameMessageBlur
        return;
    }
    if (nameInput.value.indexOf(' ') === 0) {
        errorNameMessageBlur = ("Full name must contains a space")
        infoDivName.style.display = "block"
        infoDivName.style.color = "red"
        infoDivName.innerText = errorMailMessageBlur
        return;
    }
}

function validateFocusNameText() {
    // Validate if the  email input contains text         
    infoDivName.style.display = "none"

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

function validateBlurConfirmPasswordText() {
    // Validate if the  email input contains text         
    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        errorConfirmPasswordMessageBlur = ("confirm password field can't be empty")
        infoDivMail.style.display = "block"
        infoDivMail.style.color = "red"
        infoDivMail.innerText = errorConfirmPasswordMessageBlur
        return;
    }
    if (confirmPasswordInput.value !== passwordInput.value) {
        errorConfirmPasswordMessageBlur = ("passwords must match")
        infoDivMail.style.display = "block"
        infoDivMail.style.color = "red"
        infoDivMail.innerText = errorConfirmPasswordMessageBlur
        return;
    }
}

function validateFocusConfirmPasswordText() {
    // Validate if the  email input contains text        

    infoDivConfirmPassword.style.display = "none"
    return;

}

function validationsOk() {
    // Validate if the  email input contains text 
    if (emailInput.value === "" || emailInput.value === null) {
        errorMessages = ("Email field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  email input contains text 
    if (nameInput.value === "" || nameInput.value === null) {
        errorMessages = ("Name field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  password input contains text
    if (passwordInput.value === "" || passwordInput.value === null) {
        errorMessages = ("Password field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  confirm-password input contains text
    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        errorMessages = ("Confirm password field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }


    // Validate if the  confirm-password match with the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        errorMessages = ("Please, make match the passwords")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // all validations passed
    else {
        errorMessages = ("♣ All DOM and users validations passed. Account created successfully♣")
        infoDiv.style.display = "block"
        infoDiv.style.color = "green"
        infoDiv.innerText = errorMessages
        return;
    }
}

function cleanForm() {
    formWillReset.reset();
}






