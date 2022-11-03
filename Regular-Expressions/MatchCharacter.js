
// Your regex chewieRegex should use the * character to match zero or more a characters.
// Passed:Your regex should match the string A in chewieQuote.
// Passed:Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
// Passed:Your regex chewieRegex should match 16 characters in chewieQuote.
// Passed:Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
// Passed:Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.


// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);


// The result variable should be an array with <h1> in it
// Passed:myRegex should use lazy matching
// Passed:myRegex should not include the string h1

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result2 = text.match(myRegex);


//Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

let reCriminals = /C+/; // Change this line