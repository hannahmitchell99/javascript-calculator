describe("calculator", () => {
  it("should be able to display a clicked item", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonOne = cy.get(".calculator-buttons > :nth-child(6)");
    buttonOne.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();

    const display = cy.get("#display");
    display.should("have.text", "12");
  });

  it("should add two numbers", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonOne = cy.get(".calculator-buttons > :nth-child(6)");
    buttonOne.click();
    const additionButton = cy.get("#plus");
    additionButton.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();
    const equals = cy.get("#equal");
    equals.click();
    const display = cy.get("#display");
    display.should("have.text", "3");
  });

  it("should add 3 numbers", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonOne = cy.get(".calculator-buttons > :nth-child(6)");
    buttonOne.click();
    const additionButton = cy.get("#plus");
    additionButton.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();
    additionButton.click();
    const buttonThree = cy.get(":nth-child(8)");
    buttonThree.click();
    const equals = cy.get("#equal");
    equals.click();
    const display = cy.get("#display");

    display.should("have.text", "6");
  });

  it("should multipy two double digit numbers", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonNine = cy.get(":nth-child(14)");
    buttonNine.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();
    const multipy = cy.get("#multiply");
    multipy.click();
    const buttonOne = cy.get(".calculator-buttons > :nth-child(6)");
    buttonOne.click();
    buttonTwo.click();
    const equals = cy.get("#equal");
    equals.click();
    const display = cy.get("#display");

    display.should("have.text", "1104");
  });

  it("should remove the last digit when delete is clicked ", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonNine = cy.get(":nth-child(14)");
    buttonNine.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();
    const deleteItem = cy.get("#delete");
    deleteItem.click();
    const display = cy.get("#display");

    display.should("have.text", "9");
  });

  it("should display 0 when delete is clicked to clear", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonNine = cy.get(":nth-child(14)");
    buttonNine.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();
    const deleteItem = cy.get("#delete");
    deleteItem.click();
    deleteItem.click();
    const display = cy.get("#display");

    display.should("have.text", "0");
  });

  it("should be able to mix operations", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonOne = cy.get(".calculator-buttons > :nth-child(6)");
    buttonOne.click();
    const additionButton = cy.get("#plus");
    additionButton.click();
    const buttonNine = cy.get(":nth-child(14)");
    buttonNine.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click();
    const multipy = cy.get("#multiply");
    multipy.click();
    const buttonThree = cy.get(":nth-child(8)");
    buttonThree.click();
    buttonThree.click();
    const divide = cy.get("#divide");
    divide.click();
    buttonTwo.click();
    const equals = cy.get("#equal");
    equals.click();
    const display = cy.get("#display");

    display.should("have.text", "1519");
  });

  it("should clear to 0 when ac is clicked", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonThree = cy.get(":nth-child(8)");
    buttonThree.click();
    buttonThree.click();
    const clear = cy.get("#clear");
    clear.click();
    const display = cy.get("#display");

    display.should("have.text", "0");
  });

  it("should display ERROR if divide by zero", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const divide = cy.get("#divide");
    divide.click();
    const buttonZero = cy.get(".calculator-buttons > :nth-child(5)");
    buttonZero.click();
    const equals = cy.get("#equal");
    equals.click();
    const display = cy.get("#display");

    display.should("have.text", "ERROR");
  });

  it("should be able to work with decimals", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonThree = cy.get(":nth-child(8)");
    buttonThree.click();
    buttonThree.click();
    const float = cy.get("#float");
    float.click();
    buttonThree.click();
    const multipy = cy.get("#multiply");
    multipy.click();
    buttonThree.click();
    const equals = cy.get("#equal");
    equals.click();

    const display = cy.get("#display");

    display.should("have.text", "99.89999999999999");
  });

  it("should be able to continue a running total", () => {
    cy.visit("http://127.0.0.1:5503/index.html");

    const buttonOne = cy.get(".calculator-buttons > :nth-child(6)");
    buttonOne.click();
    const additionButton = cy.get("#plus");
    additionButton.click();
    const buttonNine = cy.get(":nth-child(14)");
    buttonNine.click();
    const buttonTwo = cy.get(".calculator-buttons > :nth-child(7)");
    buttonTwo.click(); 
    const equals = cy.get("#equal");
    equals.click();
    const multipy = cy.get("#multiply");
    multipy.click();

    const display = cy.get("#display");
    display.should("have.text", "93x");
  })

  
});
