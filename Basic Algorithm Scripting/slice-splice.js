//Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let second  = arr2.slice();
    for(let i = arr1.length -1; i >= 0; i --) {
      second.splice(n, 0, arr1[i]);
    }
    return second;
   
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


  //Test Case 
//   Passed:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// Passed:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// Passed:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].