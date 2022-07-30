//Use the every Method to Check that Every Element in an Array Meets a Criteria

//The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.



function checkPositive(arr) {
    // Only change code below this line
  
  const result = arr.every(num => num > 0);
  console.log(result);
  return result;
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

  //Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.