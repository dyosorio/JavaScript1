// Exercise 1: Remove the comma

'use strict';


let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);

myString = myString.replace(/,/g, ' ');

console.log(myString);


