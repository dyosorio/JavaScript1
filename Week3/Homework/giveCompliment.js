'use strict';

//Exercise 1: You are amazing, Danny!

/*Write a function named giveCompliment - done
It takes 1 argument: your name - done
Inside the function define a variable that holds an array, compliments, with 10 strings. Each string should be a compliment, like "great", "awesome"
Write code that randomly selects a compliment
Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
Call the function three times, giving each function call the same argument: your name.*/

function giveCompliment(name) {

    const compliments = [
        'awesome',
        'inspiring',
        'smart',
        'brave',
        'charming',
        'strong',
        'wonderful',
        'one of a kind',
        'making a difference',
        'fearless'
    ];

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]; 
    // The above code picks a number out of a range of numbers and assign the result to the compliments[index];
    // Math.floor() returns the largest number
    // Math.random() returns a number in the range of 0 to less than 1

    console.log(`You are ${randomCompliment}, ${name}!`)
}


giveCompliment('Danny');

//Math.floor(Math.random()*compliments.length)
// source 1: https://www.kirupa.com/html5/picking_random_item_from_array.htm
// source 2: https://www.kirupa.com/html5/random_numbers_js.htm