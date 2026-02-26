
const addBtn = document.getElementById("add-money-btn");
document.addEventListener("DOMContentLoaded", () => {
  setBalanceLocal(getBalanceLocal());
});
function getValidateAddMoney() {
  const bankName = getInputValue("add-money-bank");
  const bankAccount = getInputValue("add-bank-number");
  const amount = getInputValue("add-money-amount").trim();
  const pin = getInputValue("add-money-pin").trim();
  if (bankName === "Select a Bank") {
    alert("Please select a bank.");
    return;
  }
  const currentBalance = getBalance();
  const amountInput = Number(amount);

  if (amountInput === "" || pin === "") {
    alert("Please enter an amount and pin.");
    return;
  }
  if (pin.length !== 4) {
    alert("Please enter a valid 4 digit pin.");
    return;
  }
  if (bankAccount.length !== 11) {
    alert("Please enter a valid 11 digit bank account number.");
    return;
  }
  if (amountInput <= 0) {
    alert("Please enter a valid amount greater than 0.");
    return;
  }
  const supportedBanks = ["Bkash","Nagad","DBBL","City Bank","UCB",
  "EBL"];
  const validPin = "1234";
  if (pin === validPin && supportedBanks.includes(bankName)) {
    let newBalance = currentBalance + amountInput;
    alert(`Successfully added $${amountInput} from ${bankName} at ${new Date()} to your balance! New balance: $${newBalance}`);
    setBalanceLocal(newBalance);
  // updated history to show in the UI
    const historyContainer = document.getElementById("history-container");
    const transactionCard = document.createElement("div");
    // transactionCard.classList.add("transaction-card", "p-6", "bg-base-100", "mb-4");
    transactionCard.innerHTML = `
      <div class="transaction-card p-6 bg-base-100">
         <p class="text-neutral/50">Successfully added $${amountInput} from ${bankName}, acc-no ${bankAccount} at ${new Date()}</p> 
      </div>
    `;
    historyContainer.appendChild(transactionCard);
    clearInput("add-money-amount");
    clearInput("add-money-pin");
  } else {
    alert("Invalid bank name or pin. Please try again.");
    return;
  }
};

addBtn.addEventListener("click", () => {
  getValidateAddMoney();
});
