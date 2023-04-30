>Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.


```js
// Create a new Date object
const now = new Date();

// Get the year today
const year = now.getFullYear();

// Get the month 
const month = now.getMonth();

// Get the date today 
const date = now.getDate();

// Get the day today 
const day = now.getDay();

// Get the hours 
const hours = now.getHours();

// Get the minutes now (0-59)
const minutes = now.getMinutes();

// Get the number of seconds elapsed from January 1, 1970 to now
const secondsSince1970 = now.getTime() / 1000;

// Log the results to the console
console.log(`Year: ${year}`);
console.log(`Month (number): ${month}`);
console.log(`Date: ${date}`);
console.log(`Day (number): ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds since January 1, 1970: ${secondsSince1970}`);
```