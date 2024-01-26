// Add numbers buttons
const numKeypad = document.querySelector(".keypad.number");

for (let i = 0; i < 10; i++) {
  const numButton = document.createElement("button");
  numButton.className = "btn";
  numButton.innerHTML = i;
  numButton.value = i;
  numKeypad.appendChild(numButton);
}

// Add operator buttons
const opKeypay = document.querySelector(".keypad.operators");
const operators = ["-", "+", "=", "/", "💀"];
for (let operator of operators) {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = operator;
  button.value = operator;
  opKeypay.appendChild(button);
}

// Display
const display = document.querySelector("textarea");
display.innerHTML = "";
let calculation = "";

// Add functionality to all buttons
const allButtons = Array.from(document.querySelectorAll("button"));
allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const input = this.value;
    if (input !== "=" && input !== "💀") {
      calculation += input;
      display.innerHTML = calculation;
    } else if (input === "=") {
      calculation = eval(calculation);
      display.innerHTML = calculation;
      calculation = "";
    } else if (input === "💀") {
      calculation = "";
      display.innerHTML = calculation;
    }
  });
});
