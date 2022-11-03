// Passed:Your regex should use the shortcut character to match digit characters
// Passed:Your regex should use the global flag.
// Passed:Your regex should find 1 digit in the string 9.
// Passed:Your regex should find 2 digits in the string Catch 22.
// Passed:Your regex should find 3 digits in the string 101 Dalmatians.
// Passed:Your regex should find no digits in the string One, Two, Three.
// Passed:Your regex should find 2 digits in the string 21 Jump Street.
// Passed:Your regex should find 4 digits in the string 2001: A Space Odyssey.


let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result);