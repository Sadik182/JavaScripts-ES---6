// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

//Looping over an Array

const cars = ['BMW', 'VOLVO', 'HONDA', 'TOYOTA'];
let name = '';

for(let x of cars){
    name += x + ' ';
}
console.log(name);

//Looping over a String

const Name = 'Md. Sadikur Rahman';

for(let letter of Name){
    console.log(letter);
}


//////////////////////////////

// The For In Loop

//The JavaScript for in statement loops through the properties of an Object: