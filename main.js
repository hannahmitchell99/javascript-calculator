// Variables from DOM

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");

const addition = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const clear = document.querySelector("#clear");
const deleteItem = document.querySelector("#delete");
const equal = document.querySelector("#equal");
const float = document.querySelector("#float");

// Other Variables

let displayValue = "0";
const clearedValue = "0";
valueArray = [];
operatorValue = " ";

//Declaring Functions

// Functions for when buttons are clicked

const whenClicked = (event) => {
  if (displayValue == "0") {
    display.innerText = event.target.innerText;
    displayValue = display.innerText;
  } else {
    display.innerText += event.target.innerText;
    displayValue = display.innerText;
  }
};
// clearing the display

const clearClicked = () => {
  display.innerText = clearedValue;
  displayValue = "0";
};

// deleting last operator

const deleteClicked = () => {
  display.innerText = display.innerText.slice(0, -1);
};

// Functions that work with the clicked buttons to give an output

// function to create array of values and to determine operator chosen

const ifEqualsClicked = () => {
  if (displayValue.includes("+")) {
    myArray = displayValue.split("+");
    operatorValue = "+";
  } else if (displayValue.includes("-")) {
    myArray = displayValue.split("-");
    operatorValue = "-";
  } else if (displayValue.includes("x")) {
    myArray = displayValue.split("x");
    operatorValue = "x";
  } else if (displayValue.includes("÷")) {
    myArray = displayValue.split("÷");
    operatorValue = "/";
  }
  return valueArray = myArray.map((item) => +item) // converting to integers
};


// checking the arrays and displays are returning correctly

const equalClick = () => {
  console.log(displayValue);
  console.log(valueArray);
  console.log(operatorValue);
};

//Calling Functions

// Event Listeners

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", whenClicked);
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", whenClicked);
});

float.addEventListener("click", whenClicked);

clear.addEventListener("click", clearClicked);

deleteItem.addEventListener("click", deleteClicked);

equal.addEventListener("click", ifEqualsClicked);

equal.addEventListener("click", equalClick);
