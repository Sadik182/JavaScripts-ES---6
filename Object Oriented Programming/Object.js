let dog1 = {
    name: 'Aflac',
    numLegs: 2
  };


  //Use Dot Notation to Access the Properties of an Object
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  
  console.log(dog.name);
  console.log(dog.numLegs);


//Create a Method on an Object
  let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
     return `This dog has ${this.numLegs} legs.`;
    }
  };
  
  console.log(dog2.sayLegs());

  
  