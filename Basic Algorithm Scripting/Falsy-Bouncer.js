// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean

function bouncer(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i ++) {
      if(!!arr[i]) {
        result.push(arr[i])
      }
    }
    return result;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

//   bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// Waiting:bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// Waiting:bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// Waiting:bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].