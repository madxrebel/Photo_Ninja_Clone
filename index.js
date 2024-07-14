// References
let fullName = document.getElementById("fullname").value;
let email = document.getElementById("email").value;
let phoneNumber = document.getElementById("phone-number").value;
let yourMessage = document.getElementById("your-message").value;
let btnSubmit = document.getElementById("btn-submit");

function onSubmit() {
    const errors = {
        fullName: '',
        email: '',
        phoneNumber: '',
        yourMessage: ''
    };
    
    const fullNameError = document.getElementById('fullNameError');
    const emailErrorElement = document.getElementById('emailError');
    const phoneNumberErrorElement = document.getElementById('phoneNumberError');
    const yourmessageErrorElement = document.getElementById('yourMessageError');

    fullName = document.getElementById("fullname").value;
    email = document.getElementById("email").value;
    phoneNumber = document.getElementById("phone-number").value;
    yourMessage = document.getElementById("your-message").value;
    
    // validate fullname
    if(!fullName) {
        errors.fullName = "A Fullname is required!"
    }

    // validate email
    if (!email) {
        errors.email = "An Email is required.";
    } 
    else {
        // A more comprehensive email pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            errors.email = "Email must be valid!";
        }
    }

    // validate phone number
    if(!phoneNumber) {
        errors.phoneNumber = "A Phone number is required!";
    }
    // validate your message
    if(!yourMessage) {
        errors.yourMessage = "A message is required!"
    }

    if(errors.email || errors.fullName || errors.phoneNumber || errors.yourMessage) {
        fullNameError.innerHTML = errors.fullName;
        emailErrorElement.innerHTML = errors.email;
        phoneNumberErrorElement.innerHTML = errors.phoneNumber;
        yourmessageErrorElement.innerHTML = errors.yourMessage;
    }
    else {
        fullNameError.innerHTML = '';
        emailErrorElement.innerHTML = '';
        phoneNumberErrorElement.innerHTML = '';
        yourmessageErrorElement.innerHTML = '';
        openPopup();

    }
}


// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    location.href = 'index.html';
}