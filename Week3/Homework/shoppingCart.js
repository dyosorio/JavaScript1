'use strict';

//Exercise 4: Shopping at the supermarket

//Let's do some grocery shopping! But when you have more than 3 items in your shopping cart the first item gets taken out.

//Create an array called shoppingCart that holds two items.
//Write a function named addToShoppingCart
//It takes 1 argument: a grocery item (string)
//Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
//Loops through the array in order to list out the items
//Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
//Call the function 3 times, each time with a different string as the argument.

const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(newItem) {
    shoppingCart + shoppingCart.push(newItem); //add newItem.

    if(shoppingCart.length > 3){ //if the array has more than three items...
        shoppingCart.shift(); //remove the first element.
    }

    for (let i = 0; i < shoppingCart.length; i++) {//list out the items.
        const groceryList = shoppingCart[i];
    } 

    console.log(`You bought ${shoppingCart.join(', ')}!`);//items separated by commas
}

addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');