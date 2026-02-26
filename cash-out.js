const btn = document.getElementById("cashout-btn");
const balanceEl = document.getElementById("balance");

document.addEventListener("DOMContentLoaded", () => {
  setBalanceLocal(getBalanceLocal());
});
// inputvalues are getting from machine.js getInputValue function
getValidateCashout = () => {
  const inputNumber = getInputValue("input-number");
  const inputAmount = getInputValue("cashout-amount");
  const inputPin = getInputValue("input-pin");
  
  if (!inputNumber || 
      !inputAmount || 
      !inputPin ) {
    alert("Please enter amount, mobile number and pin.");
    return;
      }
  if (inputNumber.length !== 11 || inputPin.length !== 4) {
    alert("Please enter a valid 11 digit mobile number and 4 digit pin.");
    return;
  };
  const currentBalance = getBalance();
  const amount = Number(inputAmount);
  
  if (amount > currentBalance) {
    alert("Insufficient balance for this cashout.");
    return;
  };
  const validNumbers = ["01712345671", "01712345672", "01712345673", "01712345674", "01712345675", "01712345676", "01712345677", "01712345678", "01712345679", "01712345670"];
  const validPin = "1234";
  if ( (validNumbers.includes(inputNumber)) && 
        inputPin === validPin ) {
    let newBalance = currentBalance - amount;
    alert(`Cashout successful! Amount: BDT ${inputAmount} at ${new Date()}, Mobile Number: ${inputNumber} Current Balance: BDT ${newBalance}`);
    
    setBalanceLocal(newBalance);
    const historyContainer = document.getElementById("history-container");
    const transactionCard = document.createElement("div");
    // transactionCard.classList.add("transaction-card", "p-6", "bg-base-100", "mb-4");
    transactionCard.innerHTML = `
      <div class="transaction-card p-6 bg-base-100">
         <p class="text-neutral/50"> Cashout successful! Amount: BDT ${inputAmount} at ${new Date()}, Mobile Number: ${inputNumber} Current Balance: BDT ${newBalance}</p> 
      </div>
    `;
    historyContainer.appendChild(transactionCard);
    // clear input values using machine.js clearInput function
    clearInput("cashout-amount");
    clearInput("input-number");
    clearInput("input-pin");
  } else {
    alert("Invalid mobile number or pin. Please try again.");
    // clear input values using machine.js clearInput function
    clearInput("cashout-amount");
    clearInput("input-number");
    clearInput("input-pin");
    return;
  };
}
btn.addEventListener("click", () => {
  getValidateCashout();
});
document.querySelector(".card-body").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getValidateCashout();
  };
});