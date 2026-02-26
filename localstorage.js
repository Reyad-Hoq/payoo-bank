function getBalanceLocal () {
    return Number(localStorage.getItem('balance')) || 0;
};

function setBalanceLocal (amount) {
    localStorage.setItem('balance', amount);
    balanceEl.textContent = amount;
    console.log('Balance updated in localStorage:', amount);
};