// Your regex should not match the string Timmber
// Passed:Your regex should not match the string Timmmber
// Passed:Your regex should match the string Timmmmber
// Passed:Your regex should not match the string Timber with 30 m's in it.

//Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);
console.log(result)




//Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result2 = favRegex.test(favWord);