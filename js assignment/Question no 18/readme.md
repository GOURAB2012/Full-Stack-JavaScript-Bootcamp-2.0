>Write a program which tells the number of days in a month, now consider leap year.

```js
let month = prompt("Enter a month (1-12): ");
let year = prompt("Enter a year: ");

// Convert month and year to numbers
month = parseInt(month);
year = parseInt(year);

// Use a switch statement to determine the number of days
let daysInMonth;
switch (month) {
  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30;
    break;
  default:
    daysInMonth = 31;
    break;
}


console.log(`There are ${daysInMonth} days in month ${month} of year ${year}.`);

```