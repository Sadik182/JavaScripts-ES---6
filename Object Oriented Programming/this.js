//Make Code More Reusable with the this Keyword


let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

//Define a Constructor Function

  function Dog() {
    this.name = 'Tomy';
    this.color = 'Black';
    this.numLegs = 2;
  }