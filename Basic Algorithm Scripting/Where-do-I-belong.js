// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    let result = arr.sort((a, b) => a -b).slice();
    
    if(result.length === 0) {
      result.push(num);
    }
    else {
      for(let i = 0; i < result.length; i ++) {
      if(result[i] < num && num < result[i+1]){
         result.splice(result.indexOf(result[i+1]), 0 , num);
      }
      else if(result[i] < num) {
         result.push(num);
      }
      
    }
    }
    console.log(result)
     return result.indexOf(num);
  
  }
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));


//   getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
// Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
// Waiting:getIndexToIns([40, 60], 50) should return 1.
// Waiting:getIndexToIns([40, 60], 50) should return a number.