// deposit button event handler
const depositBtn = document.querySelector('#deposit-button');
const totalDeposit = document.querySelector('#deposit-total');
const depositInput = document.querySelector('#deposit-input');
const balance = document.querySelector('#balance');

depositBtn.addEventListener('click', () => {
    totalDeposit.innerText = parseInt(totalDeposit.innerText) + parseInt(depositInput.value);
    balance.innerText = parseInt(balance.innerText) + parseInt(depositInput.value);
    depositInput.value = '';
});

// withdraw button event handler
const withdrawBtn = document.querySelector('#withdraw-button');
const withDrawInput = document.querySelector('#withdraw-input');
const totalWithdraw = document.querySelector('#withdraw-total');

withdrawBtn.addEventListener('click', () => {
    totalWithdraw.innerText = parseInt(totalWithdraw.innerText) + parseInt(withDrawInput.value);
    balance.innerText = parseInt(balance.innerText) - parseInt(withDrawInput.value);
    withDrawInput.value = '';
});
