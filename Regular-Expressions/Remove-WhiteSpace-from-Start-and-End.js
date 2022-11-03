// result should be equal to the string Hello, World!
// Waiting:Your solution should not use the String.prototype.trim() method.
// Waiting:The result variable should not directly be set to a string
// Waiting:The value of the hello variable should not be changed.



let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result)