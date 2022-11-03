// Passed:Your regex should match the string 42 42 42.
// Passed:Your regex should match the string 100 100 100.
// Passed:Your regex should not match the string 42 42 42 42.
// Passed:Your regex should not match the string 42 42.
// Passed:Your regex should not match the string 101 102 103.
// Passed:Your regex should not match the string 1 2 3.


let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);