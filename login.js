const loginBtn = document.getElementById("login-btn");
const inputPin = document.getElementById("input-pin");
const inputNumber = document.getElementById("input-number");
const inputEl = document.getElementById("input-enter");

function validateLogin() {
  const pinInputValue = inputPin.value;
  const numberInputValue = inputNumber.value;
  if (!pinInputValue || !numberInputValue) {
    alert("Please enter both mobile number and pin.");
    return;
  }
  const userNumbers = ["01700000000", "01700000001", "01700000002", "01700000003", "01700000004", "01700000005", "01700000006", "01700000007", "01700000008", "01700000009"];
  const validPin = "1234";
  if (pinInputValue === validPin && userNumbers.includes(numberInputValue)) {
    alert("Login successful!");

    window.location.assign("home.html");
    // window.location.href = "home.html";
  } else {
    alert("Invalid mobile number or pin. Please try again.");
    return;
  }
}
loginBtn.addEventListener("click", () => {
  validateLogin();
});

inputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
    validateLogin();
  }
});