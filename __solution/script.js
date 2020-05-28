// Get references to all relevant document.querySelectors
const formElem = document.querySelector('#signup-form');
const nameElem = document.querySelector('#first-name');
const addressElem = document.querySelector('#street-address');
const emailElem = document.querySelector('#email-address');
const phoneElem = document.querySelector('#phone-number');
const passwordElem = document.querySelector('#password');
const confirmPassElem = document.querySelector('#confirm-pass');
const termsElem = document.querySelector('#terms');
const errorMessageElem = document.querySelector('.error-message');

console.log(formElem);
function handleSubmit(ev) {
  ev.preventDefault();

  cleanUpForm();

  let password = passwordElem.value;
  let confirmPass = confirmPassElem.value;
  let hasAgreedToTerms = termsElem.checked;

  // If they haven't agreed to the terms, add a JS alert
  if (!hasAgreedToTerms) {
    window.alert('You must agree to the terms before continuing');
    return;
  }

  let errorField;
  let errorMessage;

  if (password.length < 10) {
    errorField = passwordElem;
    errorMessage =
      'Your password is too short! Please provide a password that is at least 10 characters long.';
  } else if (password !== confirmPass) {
    errorField = confirmPassElem;
    errorMessage =
      "Your passwords didn't match! Please provide the same password in each field.";
  }

  if (errorMessage && errorField) {
    errorMessageElem.style.display = 'block';
    errorMessageElem.innerText = errorMessage;

    errorField.classList.add('error-field');
    errorField.focus();
    return;
  }

  // If we made it this far, the form is valid!
  alert('Success!');
}

function cleanUpForm() {
  passwordElem.classList.remove('error-field');
  confirmPassElem.classList.remove('error-field');

  errorMessageElem.style.display = 'none';
}

formElem.addEventListener('submit', handleSubmit);
