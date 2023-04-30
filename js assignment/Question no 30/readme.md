>Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

```js
function calculator(operation, num1, num2) {
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operation");
        return;
    }
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  }
  
  // somw inputs
  calculator("+", 5, 3); 
  calculator("-", 5, 3); 
  calculator("*", 5, 3); 
  calculator("/", 6, 3); 
  
  ```