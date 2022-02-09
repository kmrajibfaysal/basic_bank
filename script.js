const loginSubmit = document.querySelector('#login-submit');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

function validation() {
  if (
    emailInput.value === 'kmrajibfaysal@gmail.com' &&
    passwordInput.value === '#kmrf2206'
  ) {
    location.href = 'https://www.google.com/';
  } else {
    alert('Please insert correct information!');
  }
}

loginSubmit.addEventListener('click', validation);

passwordInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    validation();
  }
});
