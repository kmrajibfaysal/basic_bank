const depositInput = document.querySelector('#deposit-input');
const depositButton = document.querySelector('#deposit-button');
const withdrawInput = document.querySelector('#withdraw-input');
const withdrawButton = document.querySelector('#withdraw-button');
const depositTotal = document.querySelector('#deposit-total');
const balance = document.querySelector('#balance');
// deposit button event handler
depositButton.addEventListener('click', () => {
    const previousDepositAmount = parseInt(depositTotal.innerText);
    const newDeposit = parseInt(depositInput.value);
    const newDepositTotal = previousDepositAmount + newDeposit;
    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';
    const previousBalance = parseInt(balance.innerText);
    const newBalance = previousBalance + newDeposit;
    balance.innerText = newBalance;
});
