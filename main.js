// Variables

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");

const addition = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const clear = document.querySelector("#clear");
const deleteItem =  document.querySelector("#delete")
const equal = document.querySelector("#equal")
const float = document.querySelector("#float")



//Declaring Functions

const whenClicked = (event) => {
    display.innerText += event.target.innerText;
    
};

const clearClicked = (event) => {
    display.innerText = 0;
}

const deleteClicked = (event) =>{
    display.innerText = display.innerText.slice(0,-1)
}


//Calling Functions

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", whenClicked);
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", whenClicked);
});

float.addEventListener("click", whenClicked)

clear.addEventListener("click", clearClicked)

deleteItem.addEventListener("click",deleteClicked)