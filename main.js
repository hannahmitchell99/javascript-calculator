// Variables from DOM

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");

const clear = document.querySelector("#clear");
const deleteItem = document.querySelector("#delete");
const equal = document.querySelector("#equal");
const float = document.querySelector("#float");

// Other Variables

let displayValue = "0";
const clearedValue = "0";

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
  if (display.innerText.length > 1){
    return display.innerText = display.innerText.slice(0, -1);
  } else{
    return display.innerText = "0";

  }
  
};

// Functions that work with the clicked buttons to give an output

// function to create array of values and to determine operator chosen

const ifEqualsClicked = () => {
  // creating an array with just numbers (strings at this point)
  let numbers = displayValue.split(/\+|\-|\x|\÷/g);

  // creating an array of operators
  // done by replacing the numbers and fullstops with an empty string, then we split it.

  let operators = displayValue.replace(/[0-9]|\./g, "").split("");

  // now, we loop through the array, and perform one operation at a time.
  // divide first, then multiply, then add, then subtract.
  // each time we are moving through the array, we are alternating between the numbers and the operators array.
  // final element in the array will be the output.


  let divide = operators.indexOf("÷"); // finding where in the operators array divide is located
  while (divide != -1) {
    // while the array item is not last
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("x");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    ); // parsefoloat to prevent string concatenation
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }
  if (numbers.includes(NaN)){
    display.innerText = "ERROR"
    displayValue = "0";
  } else {
    displayValue = numbers;
    return display.innerText = numbers; 
  }
  
};


// checking the arrays and displays are returning correctly

const equalClick = () => {
  console.log(displayValue);
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
