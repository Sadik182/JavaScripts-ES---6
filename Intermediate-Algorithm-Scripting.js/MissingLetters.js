function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
    str.split("").forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
          currCharCode++;
        } else {
          missing = String.fromCharCode(currCharCode);
        }
      });
  
    return missing;
  }
  
  // test here
  console.log(fearNotLetter("abce"));
         
  //Test Case

  //fearNotLetter("abce") should return the string d.
// Passed:fearNotLetter("abcdefghjklmno") should return the string i.
// Passed:fearNotLetter("stvwx") should return the string u.
// Passed:fearNotLetter("bcdf") should return the string e.
// Passed:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.