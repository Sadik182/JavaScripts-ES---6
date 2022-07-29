//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.

function alphabeticalOrder(arr) {
    // Only change code below this line
  const result = arr.sort((a, b) => a === b ? 0 : a > b ? 1: - 1);
  console.log(result);
    return result;
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



  // Sorting Numbers Element


  function numberSorted(array) {
    const sortedNumber = array.sort((a, b) => a - b);
    console.log(sortedNumber);
    return sortedNumber;
  }

  numberSorted([50,4,5,7,2,1,9, 10, 15]);