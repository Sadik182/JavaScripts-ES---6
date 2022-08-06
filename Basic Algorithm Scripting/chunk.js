function chunkArrayInGroups(arr, size) {
let newArray = []; 
for(let i = 0; i < arr.length; i+= size) {
    let result = arr.slice(i, i + size);
    newArray.push(result);
}
return newArray;
}

console.log(chunkArrayInGroups([1, 3, 4, 5, 6], 2));