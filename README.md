# javascript-calculator

The intention of this project was to create a functional calculator using Javascript, without the eval() function. The calculator had to be able to accept a minimum of two inputs.

**How I approached it**

Each time an operator was selected, it would be displayed as the inner text of the display. This became the "input" to the calculator.

Initially, I thought that the best way to start the code would be to take a string input and use the split function to split the selected number into an array with two inputs. This would be split according to the operator selected. Then I would store the value of the operator, and use that as a condition as to how to perform the calculation.

for example - 
if "+" {
    let answer = array[0] + array[1]
}

*However, this prevented me from being able to handle more than two inputs with different operators.*

So I did some investigating. I knew I needed to separate the values in the array from the operators, and find a way to match the operators to their relevant values. I found and modified code that assisted me in solving this. It entailed using regex to split the values that weren't numbers (or full stops for decimal places). Then, I used regex to create a separate array that consisted of operators.

I was able to then use splice to match the values, and add the last value to the end of the string. 

![Screenshot (15)](https://user-images.githubusercontent.com/119801701/214330271-d262956c-c5e1-4e9c-960d-c79338a6b8b0.png) 

![Screenshot (16)](https://user-images.githubusercontent.com/119801701/214330291-a82e6aac-38df-4c03-af47-2111081185a7.png)
