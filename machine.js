
// getting input values 
function getInputValue (inputId) {
  const inputElement = document.getElementById(inputId);
  const value = inputElement.value;
  console.log(`${inputId}:`, value);
  return value;
}
// clearing input values
function clearInput(id) {
  document.getElementById(id).value = "";
}
// getting balance from the DOM
function getBalance() {
  const balance = document.getElementById('balance').textContent;
  console.log('Current balance:', Number(balance));
  return Number(balance) || 0;
}

// hide all sections & toggling 
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");
  addMoney.classList.add('hidden');
  cashout.classList.add('hidden');
  history.classList.add('hidden');
  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
}