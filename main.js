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

//Declaring Functions

const whenClicked = (event) => {
    if (displayValue=="0"){
        display.innerText = event.target.innerText;
        displayValue = display.innerText;
    } else{
        display.innerText += event.target.innerText;
        displayValue = display.innerText;
    }
};

// const ifEqualsClicked = () =>{
//     const myArray = displayValue
// }

const clearClicked = () => {
  display.innerText = clearedValue;
};

const deleteClicked = () => {
  display.innerText = display.innerText.slice(0, -1);
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

equal.addEventListener("click",()=>{
    console.log(displayValue);
})



