const btn = document.getElementById("cashout-btn");
const balanceEl = document.getElementById("balance");

// page loaded to see balance including css images iframe 
/* window.addEventListener("load", () => {
  const savedBalance = localStorage.getItem("balance");
  if (savedBalance !== null) {
    balance.textContent = savedBalance;
  } else {
    localStorage.setItem("balance", balance.textContent);
  }
}); */
// to display only element content without css images iframe

document.addEventListener("DOMContentLoaded", () => {
  setBalance(getBalance());
});

// cashout function
function validateCashout() {
  const inputAmount = document.getElementById("cashout-amount");
  const inputNumber = document.getElementById("input-number");
  const inputPin = document.getElementById("input-pin");
  const amountInputValue = inputAmount.value;
  const numberInputValue = inputNumber.value;
  const pinInputValue = inputPin.value;
  // if input values are empty or null then alert and return
  if (!amountInputValue || 
      !numberInputValue || 
      !pinInputValue ) {
    alert("Please enter amount, mobile number and pin.");
    return;
      }
  /* if (amountInputValue === null || 
      amountInputValue === "" || 
      numberInputValue === null || 
      numberInputValue === "" || 
      pinInputValue === null || 
      pinInputValue === "") 
      {
    alert("Please enter amount, mobile number and pin.");
    return;
  }; */

  // if number is not 11 digit or pin is not 4 digit then alert and return 
  if (numberInputValue.length !== 11 || pinInputValue.length !== 4) {
    alert("Please enter a valid 11 digit mobile number and 4 digit pin.");
    return;
  };

  const currentBalance = Number(balanceEl.textContent);
  const amount = Number(amountInputValue);
  
  if (amount > currentBalance) {
    alert("Insufficient balance for this cashout.");
    return;
  };
  // if agent number correct like below and pin is correct then cashout successful and balance update otherwise alert and return
  const validNumbers = ["01712345671", "01712345672", "01712345673", "01712345674", "01712345675", "01712345676", "01712345677", "01712345678", "01712345679", "01712345670"];
  const validPin = "1234";
  if ( (validNumbers.includes(numberInputValue)) && 
        pinInputValue === validPin ) {
    alert(`Cashout successful! Amount: BDT ${amountInputValue} , Mobile Number: ${numberInputValue}`);
    let newBalance = currentBalance - amount;
    setBalance(newBalance);
    inputAmount.value = "";
    inputNumber.value = "";
    inputPin.value = "";
  } else {
    alert("Invalid mobile number or pin. Please try again.");
    inputAmount.value = "";
    inputNumber.value = "";
    inputPin.value = "";
    return;
  };
};
btn.addEventListener("click", () => {
  validateCashout();
});

inputPin.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
    validateCashout();
  }
}); 