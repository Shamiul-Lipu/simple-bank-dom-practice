// withdraw functionality 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Input Ammount
    const withdrawInput = document.getElementById('withdraw-input');
    const inputFieldStr = withdrawInput.value;
    const inputAmmount = parseFloat(inputFieldStr);

    withdrawInput.value = '';
    // validate input
    if (isNaN(inputAmmount) || inputAmmount <= 0) {
        alert('Please input a valid ammount!')
        return;
    }
    // previous balance
    const balance = document.getElementById('total-balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);

    // Withdraw calculation
    const previous = document.getElementById('total-withdraw');
    const withdrawStr = previous.innerText;
    const previousAmmount = parseFloat(withdrawStr);

    // validate Withdraw Ammount 
    if (inputAmmount > previousBalance) {
        alert(`Your Balance is lower: ${balanceText}`);
        return;
    }
    // total withdraw
    const totalWithdraw = previousAmmount + inputAmmount;
    previous.innerText = totalWithdraw;

    // Update Balance
    const newBalance = previousBalance - inputAmmount;
    balance.innerText = newBalance;
})
