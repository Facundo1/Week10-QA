var infoDiv = document.getElementById('register-validation-div')
var errorMessages = ''

var emailInput = document.getElementById('register-input-email')
var nameInput = document.getElementById('register-input-name')
var passwordInput = document.getElementById('register-input-password')
var confirmPasswordInput = document.getElementById('register-input-confirm-password')
var labelsQantity = document.getElementsByTagName('Label')
var inputsQantity = document.getElementsByTagName('input')
var buttonsQantity = document.getElementsByTagName('button')
var formExistence = document.getElementsByTagName('form')
var formWillReset = document.getElementById('register-form')

function userAndDomValidations() {

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

    // Validate the qantity of inputs tags are in the document
    if (inputsQantity.length !== 4) {
        errorMessages = ("there aren't the enoght qantity of inputs tags in the document")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  email input contains text 
    if (emailInput.value === "") {
        errorMessages = ("Email field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  email input contains text 
    if (nameInput.value === "") {
        errorMessages = ("Name field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  password input contains text
    if (passwordInput.value === "") {
        errorMessages = ("Password field can't be empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  confirm-password input contains text
    if (confirmPasswordInput.value === "") {
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

    // Validate if the  email input contains null value 
    if (emailInput.value === null) {
        errorMessages = ("Email field can't be null")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  password input contains null value
    if (passwordInput.value === null) {
        errorMessages = ("Password field can't be null")
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






