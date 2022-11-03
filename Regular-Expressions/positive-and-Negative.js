//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.


let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);



//Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor ).*Roosevelt/;
let result3 = myRegex.test(myString);