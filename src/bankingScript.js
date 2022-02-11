/* eslint-disable no-param-reassign */
// deposit button event handler
const depositBtn = document.querySelector('#deposit-button');
const totalDeposit = document.querySelector('#deposit-total');
const depositInput = document.querySelector('#deposit-input');
const balance = document.querySelector('#balance');

// ******************

function getValue(previousValue, currentValue) {
    if (parseInt(currentValue.value) !== 'NaN') {
        const total = parseInt(previousValue.innerText) + parseInt(currentValue.value);
        previousValue.innerText = total;
    }
    return previousValue.innerText;
}
// ******************

depositBtn.addEventListener('click', () => {
    if (depositInput.value > 0) {
        getValue(totalDeposit, depositInput);
        balance.innerText = parseInt(balance.innerText) + parseInt(depositInput.value);
        depositInput.value = '';
    }
});

// withdraw button event handler
const withdrawBtn = document.querySelector('#withdraw-button');
const withDrawInput = document.querySelector('#withdraw-input');
const totalWithdraw = document.querySelector('#withdraw-total');

withdrawBtn.addEventListener('click', () => {
    if (withDrawInput.value > 0) {
        getValue(totalWithdraw, withDrawInput);
        balance.innerText = parseInt(balance.innerText) - parseInt(withDrawInput.value);
        withDrawInput.value = '';
    }
});
