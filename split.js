//Split a String into an Array Using the split Method

//Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
    // Only change code below this line
  
  const result = str.split(/\W/);
  return result;
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");



  //Combine an Array into a String Using the join Method
//Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

function sentensify(str) {
    // Only change code below this line
  const result = str.split('-').join(' ');
  console.log(result);
  return result;
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");

  //Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
function urlSlug(title) {
    const result = title.trim().split(/\s+/).join('-').toLowerCase();
    console.log(result);
    return result;
    
    }
    // Only change code above this line
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");