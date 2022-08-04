//Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


//test case 

// repeatStringNumTimes("*", 3) should return the string ***.
// Passed:repeatStringNumTimes("abc", 3) should return the string abcabcabc.
// Passed:repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.


function repeatStringNumTimes(str, num) {
    let result = [];
    for(let i = 0; i < num; i ++) {
      result.push(str);
    }
    // console.log(result);
    return result.join('');
  }
  
  console.log(repeatStringNumTimes("*", 3));