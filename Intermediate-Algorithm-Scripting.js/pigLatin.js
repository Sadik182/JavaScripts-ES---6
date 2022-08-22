function translatePigLatin(str) {
  let result = str.split('');
  if(result[0] === 'a' || result[0] ==='e' || result[0] === 'i' || result[0] ==='o' || result[0] === 'u') {
    return str.concat('way');
  }
  else {
    if(result[1] === 'a' || result[1] ==='e' || result[1] === 'i' || result[1] ==='o' || result[1] === 'u'){
      return (result.splice(1).concat(result[0], 'ay').join(''));
    }
    else{
      return (result.splice(2).concat(result[0], result[1], 'ay').join(''));
    }
  }
}

console.log(translatePigLatin("california"))


// Final Solution 

function translatePigLatin(str) {
    return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  // test here
  translatePigLatin("consonant");