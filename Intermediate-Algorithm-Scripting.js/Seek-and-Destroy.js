// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// Passed:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// Passed:destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// Passed:destroyer([2, 3, 2, 3], 2, 3) should return [].

function destroyer(arr, ...params) {
    return arr.filter(elem => !params.includes(elem));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));