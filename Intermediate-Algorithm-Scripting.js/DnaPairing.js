
// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.



function pairElement(str) {
    // Function to match each character with the base pair
    let matchWithBasePair = function(char, pairedArray) {
      switch (char) {
        case "A":
          pairedArray.push(["A", "T"]);
          break;
        case "T":
          pairedArray.push(["T", "A"]);
          break;
        case "C":
          pairedArray.push(["C", "G"]);
          break;
        case "G":
          pairedArray.push(["G", "C"]);
          break;
      }
    };
  
    // Find pair for every character in the string
    const paired = [];
    for (let i = 0; i < str.length; i++) {
      matchWithBasePair(str[i], paired);
    }
  
    return paired;
  }
  
  // test here
  pairElement("GCG");