const depositInput = document.querySelector('#deposit-input');
const depositButton = document.querySelector('#deposit-button');
const withdrawInput = document.querySelector('#withdraw-input');
const withdrawButton = document.querySelector('#withdraw-button');
const depositTotal = document.querySelector('#deposit-total');
const balance = document.querySelector('#balance');
const withdraw = document.querySelector('#withdraw');
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

withdrawButton.addEventListener('click', () => {
    if (withdrawInput.value < parseInt(balance.innerText)) {
        const previousWithdraw = parseInt(withdraw.innerText);
        const currentWithdraw = parseInt(withdrawInput.value);
        const newWithdraw = previousWithdraw + currentWithdraw;
        withdraw.innerText = newWithdraw;
        withdrawInput.value = '';
        const previousBalance = parseInt(balance.innerText);
        const currentBalance = previousBalance - currentWithdraw;
        balance.innerText = currentBalance;
    } else {
        alert('Insuffiecient balance!');
    }
});
