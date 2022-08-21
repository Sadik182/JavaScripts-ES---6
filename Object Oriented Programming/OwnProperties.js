//Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  console.log(ownProps);


  //Use Prototype Properties to Reduce Duplicate Code

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 2;
  
  let beagle = new Dog("Snoopy");
  console.log(beagle.numLegs);



  //Iterate Over All Properties


  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for(let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property)
    } else {
      prototypeProps.push(property)
    }
  }
  console.log(ownProps);
  console.log(prototypeProps);


  //Understand the Constructor Property

  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  }
  else {
    return false;
  }
  }