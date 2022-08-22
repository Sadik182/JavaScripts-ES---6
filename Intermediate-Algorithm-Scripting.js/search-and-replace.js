//Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    let index = str.indexOf(before);
    if(str[index] === str[index].toUpperCase()) {
       after = after.charAt(0).toUpperCase() + after.slice(1);  
    }
    else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
     str = str.replace(before, after);
     return str;
  }
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

  //myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
// Passed:myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
// Passed:myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.