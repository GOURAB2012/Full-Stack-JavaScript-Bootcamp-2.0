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

  