'use strict';

//Exercise 3: Log the number

let numberX;
console.log("the value of numberX before initialization is undefined");
console.log(numberX);
numberX = 20;
console.log("the value of numberX should be 20 after initialization");
console.log(numberX);

//This is from developer.mozilla: Accessing a let variable before the initialization results in a ReferenceError.
// Why the value of the uninitialized numberX was undefined instead of ReferenceError? 