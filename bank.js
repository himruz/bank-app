// deposite functionality
document.getElementById('deposite-btn').addEventListener('click', function () {
    // set & update deposite
    const getDepositeFiled = document.getElementById('deopsite');
    const deopsiteAmount = getDepositeFiled.value;
    const newDeposite = parseFloat(deopsiteAmount);
    const getCurrentDeposite = document.getElementById('deposite-amount');
    const currentDepositeElement = getCurrentDeposite.innerText;
    const currentDepositeNumber = parseFloat(currentDepositeElement);
    const totalDeposit = newDeposite + currentDepositeNumber;

    getCurrentDeposite.innerText = totalDeposit;

    // set & update balance
    const getBalance = document.getElementById('balance-amount');
    const balanceElement = getBalance.innerText;
    const currentBalanceNumber = parseFloat(balanceElement);
    const totalBalance = newDeposite + currentBalanceNumber;
    getBalance.innerText = totalBalance;

    getDepositeFiled.value = '';
})

// withdraw functionality
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // set & update withdraw
    const getWithDrawField = document.getElementById('withdraw');
    const withDrawAmount = getWithDrawField.value;
    const withDrawAmountNumber = parseFloat(withDrawAmount);
    const getCurrentWithdraw = document.getElementById('withdraw-amount');
    const currentWithdraElement = getCurrentWithdraw.innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraElement);


    // set & update balance after withdraw

    const previousBalance = document.getElementById('balance-amount');
    const previousBalanceElement = previousBalance.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceElement);
    document.getElementById('withdraw').value = '';
    if (withDrawAmountNumber > previousBalanceNumber) {
        alert("Don't have enough balance");
        return;
    }
    const totalWithdraw = currentWithdrawNumber + withDrawAmountNumber
    getCurrentWithdraw.innerText = totalWithdraw;

    const updateBalance = previousBalanceNumber - withDrawAmountNumber;
    previousBalance.innerText = updateBalance;

})
