//Copy an Array with the Spread Operator
//copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
// Passed:copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
// Passed:copyMachine([true, true, null], 1) should return [[true, true, null]]
// Passed:copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
// Passed:The copyMachine function should utilize the spread operator with array arr

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
    newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));


//Combine Arrays with the Spread Operator
// Passed:spreadOut should return ["learning", "to", "code", "is", "fun"]
// Passed:The spreadOut function should utilize spread syntax

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']
    return sentence;
  }
  
  console.log(spreadOut());