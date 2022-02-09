const loginSubmit = document.querySelector('#login-submit');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

// login validation function
function validation() {
    if (emailInput.value === 'kmrajibfaysal@gmail.com' && passwordInput.value === '#kmrf2206') {
        window.location.href = './banking.html';
    } else {
        alert('Please insert correct information!');
    }
}

// login button event listener
loginSubmit.addEventListener('click', validation);

// enter key event listener for password field
emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        validation();
    }
});
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        validation();
    }
});
