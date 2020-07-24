//Exercise 5: Who wants a drink?

'use strict';

// You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.

//Declare a variable that holds an empty array, called drinkTray. done!
//There are 3 different types of drinks:
//const drinkTypes = ['cola', 'lemonade', 'water']; done!

//Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
// Expected result:
//const drinkTray = ['cola', 'cola', 'lemonade', 'lemonade', 'water']; done!
// 'Hey guys, I brought a cola, cola, lemonade, lemonade, water!' // done!


//If there are already two instances of a drinkType then start with the next drink in the array.
//Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
//Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
//Test out your code using node in the command line!

let drinkTray = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {
    // Runs 5 times, with values of step 0 through 4.
    drinkTray.push(drinkTray[i]);
    if (drinkTray.length === 5){
        console.log('Hey guys, I brought ' + drinkTray + '!');
    }
  }