// function diffArray(arr1, arr2) {
//   const array = arr1.concat(arr2);
//   const result = array.filter(elem => !arr1.includes(elem) || !arr2.includes(elem));
//   console.log(result);
//   return result;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))


function diffArray(arr1, arr2) {
    const array = [];
    function ArrayNot(first, second) {
      for(let i = 0; i < first.length; i++) {
        if(second.indexOf(first[i]) == -1) {
          array.push(first[i])
        }
      }
    }
    ArrayNot(arr1, arr2);
    ArrayNot(arr2, arr1);
    return array;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))