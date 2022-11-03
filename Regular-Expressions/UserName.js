// Your regex should match the string JACK
// Passed:Your regex should not match the string J
// Passed:Your regex should match the string Jo
// Passed:Your regex should match the string Oceans11
// Passed:Your regex should match the string RegexGuru
// Passed:Your regex should not match the string 007


let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

// Explanation 

// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input