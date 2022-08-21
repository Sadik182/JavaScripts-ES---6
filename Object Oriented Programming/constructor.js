//Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  
  let hound  = new Dog();


  //Extend Constructors to Receive Arguments
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  
  }
  
  let terrier = new Dog('Tomy', 'Black');

//Verify an Object's Constructor with instanceof

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(4);
   myHouse instanceof House
  