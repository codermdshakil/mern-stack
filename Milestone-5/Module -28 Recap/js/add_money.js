

document.getElementById('btn-add-money').addEventListener('click', (event) => {
    event.preventDefault();

    const amountInput = document.getElementById('amount');
    const pin = document.getElementById('pin');

    // get main balance
    const mainBalanceTag = document.getElementById('main-balance');
    if(parseFloat(pin.value) === 1234){
        const totalNewBalance = parseFloat(mainBalanceTag.innerText) + parseFloat(amountInput.value);
        mainBalanceTag.innerText = totalNewBalance;
    }
    amountInput.value = "";
    pin.value = "";
})