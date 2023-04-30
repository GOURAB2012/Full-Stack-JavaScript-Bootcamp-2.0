>Write a program which tells the number of days in a month.


```js
let month = prompt("Enter a month (1-12): ");

// Convert month and year to numbers
month = parseInt(month);


// Use a switch statement to determine the number of days
let daysInMonth;
switch (month) {
  case 1:
    daysInMonth = 27;
    break;
     case 2:
      daysInMonth = 30;
    break;
  default:
     daysInMonth = 31
 break;
}


console.log(`There are ${daysInMonth} days in month ${month} `);
```