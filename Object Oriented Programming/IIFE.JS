//Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
  })();


  //Use an IIFE to Create a Module
//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
let funModule  = (function () {
    return {
      isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
    }
    })();