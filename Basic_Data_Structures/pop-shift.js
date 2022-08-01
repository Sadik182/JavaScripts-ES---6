function popShift(arr) {
    let popped = arr.pop('is', 'not', 'complete') // Change this line
    let shifted = arr.shift() // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));