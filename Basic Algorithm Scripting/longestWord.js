//Find the Longest Word in a String

function findLongestWordLength(str) {
    let word = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < word.length; i ++) {
      if(word[i].length > longestWord) {
        longestWord = word[i].length;
      }
    }
    return longestWord;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

