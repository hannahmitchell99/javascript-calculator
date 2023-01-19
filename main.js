// Variables

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");

const addition = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const clear = document.querySelector("#clear");
const deleteClicked =  document.querySelector("#delete")
const equal = document.querySelector("#equal")
const float = document.querySelector("#float")


// Functions

const whenClicked = (event) => {
  display.innerText += event.target.innerText;
};


//

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", whenClicked);
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", whenClicked);
});
