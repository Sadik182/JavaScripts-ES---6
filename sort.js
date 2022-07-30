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


  //Return a Sorted Array Without Changing the Original Array


  //A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

  const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const a1 = arr.slice().concat();
  const a2 = a1.sort((a, b) => a - b);
  console.log(a1);
  return a2;


  // Only change code above this line
}
console.log(globalArray);

nonMutatingSort(globalArray);
