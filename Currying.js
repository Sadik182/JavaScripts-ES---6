//Introduction to Currying and Partial Application
//The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));


function add(x) {
    // Only change code below this line
  return function(y) {
    return function(z) {
      return x + y +z;
    }
  }
    // Only change code above this line
  }
  
  add(10)(20)(30);