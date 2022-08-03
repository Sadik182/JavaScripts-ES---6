// Use the delete Keyword to Remove Object Properties
// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);


  //Check if an Object has a Property
  //Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if(userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) {return true} else {return false}
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));