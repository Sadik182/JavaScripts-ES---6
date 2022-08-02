//Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);



//Copy Array Items Using slice()

function forecast(arr) {
    // Only change code below this line
  const newArray = arr.slice(2, 4);
  
    return newArray;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));