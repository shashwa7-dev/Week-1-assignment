/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(result) {
    this.result = result;
  }

  add(num) {
    if (typeof num !== "number") {
      throw new Error("Invalid input. Input must be a number.");
    }
    this.result += num;
  }

  subtract(num) {
    if (typeof num !== "number") {
      throw new Error("Invalid input. Input must be a number.");
    }
    this.result -= num;
  }

  multiply(num) {
    if (typeof num !== "number") {
      throw new Error("Invalid input. Input must be a number.");
    }
    this.result *= num;
  }

  divide(num) {
    if (typeof num !== "number") {
      throw new Error("Invalid input. Input must be a number.");
    }
    if (num === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  calculate(expression) {
    // Remove any whitespace from the expression
    expression = expression.replace(/\s/g, "");

    // Validate the expression for non-numeric characters
    if (!/^[0-9+\-*/().]+$/.test(expression)) {
      throw new Error(
        "Invalid expression. Expression can only contain numbers, +, -, *, /, (, and )."
      );
    }
    // Parse and evaluate the expression
    this.result += this.#evaluateExpression(expression);
  }

  #evaluateExpression(expression) {
    const tokens = this.#tokenize(expression);
    const postfix = this.#convertToPostfix(tokens);
    const result = this.#evaluatePostfix(postfix);
    return result;
  }

  #tokenize(expression) {
    const tokens = [];
    let currentToken = "";

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (char.match(/\d/)) {
        currentToken += char;
      } else {
        if (currentToken !== "") {
          tokens.push(parseFloat(currentToken));
          currentToken = "";
        }

        tokens.push(char);
      }
    }

    if (currentToken !== "") {
      tokens.push(parseFloat(currentToken));
    }

    return tokens;
  }

  #convertToPostfix(tokens) {
    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    const operatorStack = [];
    const postfix = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === "number") {
        postfix.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== "("
        ) {
          postfix.push(operatorStack.pop());
        }
        operatorStack.pop(); // Discard the '(' token
      } else if (token in precedence) {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== "(" &&
          precedence[token] <=
            precedence[operatorStack[operatorStack.length - 1]]
        ) {
          postfix.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
    }

    while (operatorStack.length > 0) {
      postfix.push(operatorStack.pop());
    }

    return postfix;
  }

  #evaluatePostfix(postfix) {
    const operandStack = [];

    for (let i = 0; i < postfix.length; i++) {
      const token = postfix[i];

      if (typeof token === "number") {
        operandStack.push(token);
      } else {
        const b = operandStack.pop();
        const a = operandStack.pop();

        if (token === "+") {
          operandStack.push(a + b);
        } else if (token === "-") {
          operandStack.push(a - b);
        } else if (token === "*") {
          operandStack.push(a * b);
        } else if (token === "/") {
          if (b === 0) {
            throw new Error("Cannot divide by zero.");
          }
          operandStack.push(a / b);
        }
      }
    }

    return operandStack[0];
  }
}

module.exports = { Calculator };
