> Write a program to check that the number given by the user is a prime number or not.

```js
const num = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (num === 1) {
  console.log("1 is not a prime number.");
} else if (num > 1) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }
} else {
  console.log("Invalid input.");
}

```