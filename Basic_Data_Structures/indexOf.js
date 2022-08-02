//Check For The Presence of an Element With indexOf()

// Passed:The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
// Passed:quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
// Passed:quickCheck(["onions", "squash", "shallots"], "onions") should return true
// Passed:quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
// Passed:quickCheck([true, false, false], undefined) should return false
// Passed:The quickCheck function should utilize the indexOf() method


function quickCheck(arr, elem) {
    // Only change code below this line
  const result = arr.indexOf(elem)
  if(result > 0) {
    return true;
  }
  else{
    return false
  }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



  //Iterate Through All an Array's Items Using For Loops
//   Passed:filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
//   Passed:filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
//   Passed:filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
//   Passed:filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
//   Passed:The filteredArray function should utilize a for loop

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
  for(let i = 0; i < arr.length; i++) {
      if(arr[i].indexOf(elem) == -1){
        newArr.push(arr[i])
        
      }
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));