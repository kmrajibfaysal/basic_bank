// deposit button event handler
const depositBtn = document.querySelector('#deposit-button');
const totalDeposit = document.querySelector('#deposit-total');
const depositInput = document.querySelector('#deposit-input');
const balance = document.querySelector('#balance');
depositBtn.addEventListener('click', () => {
    const previousDeposit = parseInt(totalDeposit.innerText);
    const newDeposit = parseInt(depositInput.value);
    totalDeposit.innerText = previousDeposit + newDeposit;
    balance.innerText = parseInt(balance.innerText) + newDeposit;
    depositInput.value = '';
});

// withdraw button event handler
const withdrawBtn = document.querySelector('#withdraw-button');
const withDrawInput = document.querySelector('#withdraw-input');
const totalWithdraw = document.querySelector('#withdraw-total');

withdrawBtn.addEventListener('click', () => {
    const previousWithdraw = parseInt(totalWithdraw.innerText);
    const newWithdraw = parseInt(withDrawInput.value);
    totalWithdraw.innerText = previousWithdraw + newWithdraw;
    balance.innerText = parseInt(balance.innerText) - newWithdraw;
    withDrawInput.value = '';
});
