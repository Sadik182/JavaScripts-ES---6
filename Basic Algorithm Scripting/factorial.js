//Factorialize a Number
function factorialize(num) {
    if(num == 0 || num == 1) {
      return 1;
    }
    else {
      return num * factorialize(num - 1);
    }
    };
  
  
  factorialize(5);

// Factorial using Loop
  function factorialize(num) {
    let result = 1;
     if(num == 0 || num == 1) {
       return result;
     }
     else {
       for(let i = num; i >= 1; i --) {
       result = result * i;
     }
     return result;
     }
    };
  
  
  console.log(factorialize(5))