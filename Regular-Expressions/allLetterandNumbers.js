// Your regex should use the global flag.
// Passed:Your regex should use the shorthand character \w to match all characters which are alphanumeric.
// Passed:Your regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.
// Passed:Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.
// Passed:Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!
// Passed:Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;