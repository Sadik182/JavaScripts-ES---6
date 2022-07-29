//Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

const squareList = arr => {
    // Only change code below this line
    const result = arr.filter(positive => positive - Math.floor(positive) === 0 && positive > 0).map(square => square * square);
    console.log(result);
    return result;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  