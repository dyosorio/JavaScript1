'use strict';

//Exercise 2: Dog years

//Write a function named calculateDogAge.
//It takes 1 argument: your (fictional) puppy's age (number).
//Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
//Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"


const calculateDogAge = age => {
    let dogAge = age * 7;

    return `Your doggie is ${dogAge} years old in dog years!`

}

console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));