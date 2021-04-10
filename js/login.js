//Getting elements by ID
var emailInput = document.getElementById('login-input-email')
var passwordInput = document.getElementById('login-input-password')
var loginButton = document.getElementById('login-button')
var infoDiv = document.getElementById('login-validation-div')
var infoDivMail = document.getElementById('mail-validation-div')
var infoDivPassword = document.getElementById('password-validation-div')

// Getting form element
var formExistence = document.getElementsByTagName('form')

// Variables to send validation messages
var errorMailMessageBlur = ''
var errorPasswordMessageBlur = ''
var errorMessagesValidationsOk = ''

// Add events to elements
emailInput.addEventListener("blur", validateBlurEmailText)
passwordInput.addEventListener("blur", validateBlurPasswordText)
emailInput.addEventListener("focus", validateFocusEmailText)
passwordInput.addEventListener("focus", validateFocusPasswordText)
loginButton.addEventListener('click', validationsOk)
loginButton.addEventListener('click', getEmail)
// Validations of email (blur event)
function validateBlurEmailText() {
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

// Validations of email (focus event)
function validateFocusEmailText() {
    if (emailInput.value === "" || emailInput.value === null) {
        infoDivMail.style.display = "none"
        return;
    }
    if (!isEmail(emailInput.value)) {
        infoDivMail.style.display = "none"
        return
    }
}

// Validations of password (blur event)
function validateBlurPasswordText() {

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

// Validations of password (focus event)
function validateFocusPasswordText() {

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

// Validations on "login" button
function validationsOk() {

    // Validate if in the HTML document exist a form
    if (formExistence.length === 0) {
        errorMessages = ("Form tag doesn't exist in the html document")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    if (emailInput.value === "" || emailInput.value === null) {
        return;
    }
    if (!isEmail(emailInput.value)) {
        return
    }
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
        errorMessagesValidationsOk = (`Logged Succesfully. Your account data is: ${emailInput.value} ${passwordInput.value.type = "*******"}`)
        infoDiv.style.display = "block"
        infoDiv.style.color = "green"
        infoDiv.innerText = errorMessagesValidationsOk
        return;
    }

}

//function to test if an email is invalid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )
}


// Request HTTP through GET method
async function getEmail() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${emailInput.value}`, {
            method: 'get',
        });
        console.log('Completed!', response);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}


