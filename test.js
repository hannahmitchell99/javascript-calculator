let displayValue = "10.1+36-10";

// creating an array with just numbers (strings at this point)
let numbers = displayValue.split(/\+|\-|\x|\÷/g);
console.log(numbers)

// creating an array of operators 
// done by replacing the numbers and fullstops with an empty string, then we split it.

let operators = displayValue.replace(/[0-9]|\./g, "").split("");
console.log(operators)

// now, we loop through the array, and perform one operation at a time. 
// divide first, then multiply, then add, then subtract.
// each time we are moving through the array, we are alternating between the numbers and the operators array.
// final element in the array will be the output. 

let divide = operators.indexOf("÷"); // finding where in the operators array divide is located
console.log(divide)
while (divide != -1) { // while the array item is not last
  console.log(numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1])); 
  // splicing from divide, 2 values
  console.log(operators.splice(divide, 1));
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
  numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1])); // parsefoloat to prevent string concatenation
  operators.splice(add, 1);
  add = operators.indexOf("+");
}


console.log(numbers)
