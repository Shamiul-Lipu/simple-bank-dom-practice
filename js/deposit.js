// deposit functionality
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Input Ammount
    const depositInput = document.getElementById('deposit-input');
    const inputFieldStr = depositInput.value;
    const inputAmmount = parseFloat(inputFieldStr);

    // validate input
    if (isNaN(inputAmmount) || inputAmmount <= 0) {
        alert('Please input a valid ammount!')
        return;
    }
    // Total Deposite
    const previous = document.getElementById('total-deposit');
    const depositText = previous.innerText;
    const previousAmount = parseFloat(depositText);

    const totalDeposit = inputAmmount + previousAmount;
    previous.innerText = totalDeposit;
    depositInput.value = '';


    // Adding with Balance
    const displayedBalance = document.getElementById('total-balance');
    const balanceText = displayedBalance.innerText;
    const previousBalance = parseFloat(balanceText);
    const newBalance = previousBalance + inputAmmount;
    displayedBalance.innerText = newBalance;
})
