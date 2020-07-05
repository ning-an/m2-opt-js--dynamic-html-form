const form = document.querySelector('#form');
const checkbox = document.getElementById('checkbox');
const submit = document. getElementById('submit');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirmation');
const passwordAlert = document.getElementById('passwordAlert');
const inputboxes = document.querySelectorAll('.inputbox');

const updateError = e => e.target.style = '';

const displayAlert = (text, invalidInput) => {
    passwordAlert.style.display = 'block';
    passwordAlert.innerText = text;
    
    invalidInput.style.border = '3px solid red';
    invalidInput.style.borderRadius = '3px';
    invalidInput.focus();
    invalidInput.value = '';
    invalidInput.addEventListener('input', updateError, {once: true});
}

const shortPasswordText = 'Your password is too short! Please provide a \
password that\'s at least 10 characters long';
const unmatchedPasswordText = 'Your password didn\'t match, please provide the same password in each field'

const submitHandler = (e) => {
    e.preventDefault();
    
    if (!checkbox.checked) {
        alert('Please agree to the terms of service!');
        return;
    } 
    
    if (password.value.length < 10) {
        return displayAlert(shortPasswordText, password);
    } else if (passwordConfirmation.value !== password.value) {
        return displayAlert(unmatchedPasswordText, passwordConfirmation);
    } else {
        
        passwordAlert.style.display = 'none';
        alert('Success');
        console.log('hi');
    }
}

form.addEventListener('submit', submitHandler);