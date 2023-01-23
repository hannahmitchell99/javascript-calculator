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
    return (valueArray = myArray.map((item) => parseFloat(item))); // converting to floats
  };
  
  // calculating
  
  const calculatedResult = () => {
    if (valueArray.includes(NaN)){
      display.innerText = "ERROR"
      displayValue = "0";
    }
    else if (operatorValue == "+") {
      display.innerText = valueArray[0] + valueArray[1];
    } else if (operatorValue == "-") {
      display.innerText = valueArray[0] - valueArray[1];
    } else if (operatorValue == "x") {
      display.innerText = valueArray[0] * valueArray[1];
    } else if (operatorValue == "/") {
      display.innerText = valueArray[0] / valueArray[1];
    }
  };
  
  