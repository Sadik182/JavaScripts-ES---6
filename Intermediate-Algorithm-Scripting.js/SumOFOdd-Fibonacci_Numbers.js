// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
    let prev = 0;
    let current = 1
    let result = 0;
    while(current <= num) {
      if(current % 2 !== 0) {
        result += current;
      }
      current += prev;
      prev = current - prev;
    }
    return result;
  }
  
  console.log(sumFibs(4))


// Using Functional Programing 

// First making the simple bibonacci series then using filter selecting odd number then add it all together.
function sumFibs(num) {
    let prev = 0;
    let current = 1
    let result = [];
    
    while(current <= num) {
      current += prev;
      prev = current - prev;
      result.push(prev)
    }
      return result.filter(odd => odd % 2 !== 0).reduce((a, b) => a + b, 0)
  }
  
  console.log(sumFibs(4))