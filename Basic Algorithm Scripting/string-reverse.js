// Reverse A String 

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));


// Reversing String Using For Loop

function reverseString(str) {
    let reverse = '';
    for(let i = str.length -1; i >= 0; i--) {
      reverse += str[i];
    }
    return reverse;
  }
  
  console.log(reverseString("hello"))