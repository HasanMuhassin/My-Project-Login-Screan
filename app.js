const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpasswrod'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim(); 

    if (usernameVal === '') {
        setError(username, 'Username is Required');
    } else {
        setSuccess(username); 
    }

    if (emailVal === '') {
        setError(email, 'Email is Required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please Enter Valid Email');
    } else {
        setSuccess(email); 
    }

    if (passwordVal === '') {
        setError(password, 'Password is Required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password); 
    }

    if (cpasswordVal === '') {
        setError(cpassword, 'Confirmed Password is Required');
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords Do Not Match');
    } else {
        setSuccess(cpassword); 
    }
}


function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error'); 
    inputGroup.classList.remove('success'); 
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success'); 
    inputGroup.classList.remove('error'); 
}

const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
};
