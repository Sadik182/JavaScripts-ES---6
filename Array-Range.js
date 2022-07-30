//Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


function sumAll(arr) {
    const max = Math.max(arr[0], arr[1]);
    const min = Math.min(arr[0], arr[1]);
   
    let sum = 0;
    for(let i = min; i <= max; i++){
      sum += i;
    }
    return sum;
   
   }
   
   sumAll([1, 4]);


// Different way to solve the problem

const RangeArray = arr => {
    let sum = 0;
    let result = 0;
    if(arr[0] < arr[1]) {
        for(let i = arr[0]; i <= arr[1]; i++){
            sum += i;
        }
        return sum;
    }
    else {
        for(let j = arr[0]; j >= arr[1]; j--){
            result += j;
        }
        return result;
    }
}

console.log(RangeArray([1, 4]));
console.log(RangeArray([4, 1]));
console.log(RangeArray([40, 10]));
console.log(RangeArray([10, 40]));