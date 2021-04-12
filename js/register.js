// Getting elements by ID
var infoDivMail = document.getElementById('register-mail-validation-div')
var infoDivName = document.getElementById('register-name-validation-div')
var infoDivPassword = document.getElementById('register-password-validation-div')
var infoDivConfirmPassword = document.getElementById('register-cpassword-validation-div')
var infoDiv = document.getElementById('register-validation-div')
var registerButton = document.getElementById('register-button')
var formWillReset = document.getElementById('register-form')
var emailInput = document.getElementById('register-input-email')
var nameInput = document.getElementById('register-input-name')
var passwordInput = document.getElementById('register-input-password')
var confirmPasswordInput = document.getElementById('register-input-confirm-password')

// Getting elements from tagname
var formExistence = document.getElementsByTagName('form')
var labelsQantity = document.getElementsByTagName('Label')
var inputsQantity = document.getElementsByTagName('input')
var buttonsQantity = document.getElementsByTagName('button')

// Variables to send validation messages
var errorMailMessageBlur = ''
var errorNameMessageBlur = ''
var errorPasswordMessageBlur = ''
var errorConfirmPasswordMessageBlur = ''
var errorMessagesValidationsOk = ''

// Add events to elements
emailInput.addEventListener("blur", validateBlurEmailText)
nameInput.addEventListener("blur", validateBlurNameText)
passwordInput.addEventListener("blur", validateBlurPasswordText)
confirmPasswordInput.addEventListener("blur", validateBlurConfirmPasswordText)
emailInput.addEventListener("focus", validateFocusEmailText)
nameInput.addEventListener("focus", validateFocusNameText)
passwordInput.addEventListener("focus", validateFocusPasswordText)
confirmPasswordInput.addEventListener("focus", validateFocusConfirmPasswordText)
registerButton.addEventListener('click', validationsOk)
registerButton.addEventListener('click', getEmail)

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
    infoDivMail.style.display = "none"
}

// Validations of name (blur event)
function validateBlurNameText() {

    if (nameInput.value === "" || nameInput.value === null) {
        errorNameMessageBlur = ("Name field can't be empty")
        infoDivName.style.display = "block"
        infoDivName.style.color = "red"
        infoDivName.innerText = errorNameMessageBlur
        return;
    }
    if (nameInput.value.search(/\s/g) <= 0) {
        errorNameMessageBlur = ("Full name must contains a space")
        infoDivName.style.display = "block"
        infoDivName.style.color = "red"
        infoDivName.innerText = errorNameMessageBlur
        return;
    }
}

// Validations of name (focus event)
function validateFocusNameText() {

    infoDivName.style.display = "none"
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

// Validations of confirm password (blur event)
function validateBlurConfirmPasswordText() {

    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        errorConfirmPasswordMessageBlur = ("confirm password field can't be empty")
        infoDivConfirmPassword.style.display = "block"
        infoDivConfirmPassword.style.color = "red"
        infoDivConfirmPassword.innerText = errorConfirmPasswordMessageBlur
        return;
    }
    if (confirmPasswordInput.value !== passwordInput.value) {
        errorConfirmPasswordMessageBlur = ("passwords must match")
        infoDivConfirmPassword.style.display = "block"
        infoDivConfirmPassword.style.color = "red"
        infoDivConfirmPassword.innerText = errorConfirmPasswordMessageBlur
        return;
    }
}

// Validations of confirm password (focus event)
function validateFocusConfirmPasswordText() {

    infoDivConfirmPassword.style.display = "none"
    return;
}

// Validations on "register" button
function validationsOk() {

    // Validate if in the HTML document exist a form
    if (formExistence.length === 0) {
        errorMessages = ("Form tag doesn't exist in the html document")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate the qantity of labels tags are in the document
    if (labelsQantity.length !== 4) {
        errorMessages = ("There aren't the enoght qantity of label tags in the document")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate the qantity of buttons are in the document
    if (buttonsQantity.length !== 2) {
        errorMessages = ("there aren't the enoght qantity of button tags in the document")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate the qantity of inputs tags are in the document
    if (inputsQantity.length !== 4) {
        errorMessages = ("there aren't the enoght qantity of inputs tags in the document")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    if (emailInput.value === "" || emailInput.value === null) {
        return;
    }
    // Validate if the  email input contains text 
    if (nameInput.value === "" || nameInput.value === null) {
        return;
    }
    // Validate if the  password input contains text
    if (passwordInput.value === "" || passwordInput.value === null) {
        return;
    }
    // Validate if the  confirm-password input contains text
    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        return;
    }
    // Validate if the  confirm-password match with the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        return;
    }
    // all validations passed
    else {
        errorMessages = (`Registered Succesfully. Your account data is: ${emailInput.value} ${nameInput.value} ${passwordInput.value.type = "*******"} ${confirmPasswordInput.value.type = "*******"}`)
        infoDiv.style.display = "block"
        infoDiv.style.color = "green"
        infoDiv.innerText = errorMessages
        return;
    }
}

//function to test if an email is invalid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

// Reset fields function
function cleanForm() {
    formWillReset.reset();
}

// Request HTTP through GET method
async function getEmail() {
    if (emailInput.value !== "" && emailInput.value !== null && passwordInput.value !== "" && passwordInput.value) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${emailInput.value}`, {
                method: 'get',
            });
            console.log('Completed!', response);
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    }

}





