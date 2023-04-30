
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let message;
    
    if (bmi < 18.5) {
      message = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = 'Overweight';
    } else {
      message = 'Obese';
    }
    
    return `${bmi.toFixed(1)} - ${message}`;
  }

  
  
  console.log(calculateBMI(68, 1.75));
  
  