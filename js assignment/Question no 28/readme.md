>
Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****

```js
// 1st
function printTrianglePattern(num) {
    for (let i = 1; i <= num; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  } 
  printTrianglePattern(3);


  
  // 2nd
function printSquarePattern(num) {
    for (let i = 1; i <= num; i++) {
      let pattern = '';
      for (let j = 1; j <= num; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }

  printSquarePattern(3);
  
   
  

  // 3rd
function printPyramidPattern(num) {
    let pattern = '';
    let spaces = num - 1;
  
    for (let i = 1; i <= num; i++) {
      
      for (let j = 1; j <= spaces; j++) {
        pattern += ' ';
      }
    
      for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*';
      }
   
      pattern += '\n';
      spaces--;
    }
  
    console.log(pattern);
  }
  
  printPyramidPattern(3);

  ```