//Change the Prototype to a New Object

//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: function() {
      console.log('nom');
    },
    describe: function() {
      console.log(`My Name is ${this.name}`);
    }
  
  };
  
  //Remember to Set the Constructor Property when Changing the Prototype

  function Dog2(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog2.prototype = {
    constructor: Dog2,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  

  //Understand Where an Object’s Prototype Comes From
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  console.log(Dog.prototype.isPrototypeOf(beagle));

  //Understand the Prototype Chain
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);