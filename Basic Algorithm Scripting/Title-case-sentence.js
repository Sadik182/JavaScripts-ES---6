// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// Test Case 

// titleCase("I'm a little tea pot") should return a string.
// Passed:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// Passed:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// Passed:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.


function titleCase(str) {
    let string = str.toLowerCase().split(' ');
    console.log(string)
    for(let i = 0; i < string.length; i++) {
     string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
      
    }
    return string.join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));