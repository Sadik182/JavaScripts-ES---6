//Change the regex countWhiteSpace to look for multiple whitespace characters in a string.


let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);



//Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace2 = /\S/g; // Change this line
let result2 = sample2.match(countNonWhiteSpace2);
console.log(result2);



//Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result3 = ohRegex.test(ohStr);


//Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // Change this line
let result4 = haRegex.test(haStr);
console.log(result4);