//Add Key-Value Pairs to JavaScript Objects
//A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods['bananas'] = 13;
  foods['grapes'] = 35;
  foods['strawberries'] = 27;
  // Only change code above this line
  
  console.log(foods);


  //Modify an Object Nested Within an Object
//Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);