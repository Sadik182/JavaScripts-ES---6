//Generate an Array of All Object Keys with Object.keys()

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
      console.log(Object.keys(obj))
      return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));


  //Modify an Array Stored in an Object

  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    console.log(userObj.data.friends);
    userObj.data.friends.push(friend);
    return userObj.data.friends
    
  
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));