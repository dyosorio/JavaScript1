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


let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let drink1 = drinkTypes[0];

function bringDrinks(arr) {

   
    drinkTray.push(drinkTypes[0]) // cola + cola, cola
}

for (let i = 1; i < 2; i++) {

    for (let i = 0; i < 2; i++) {
        drinkTray.push(drinkTypes[0]) // cola // cola, cola
    }

    for (let i = 1; i < 3; i++) {
        drinkTray.push(drinkTypes[1]); //cola, cola, lemonade // cola, cola, lemonade, lemonade
    }

    for (let i = 2; i < 4; i++) {
        drinkTray.push(drinkTypes[2]); //cola, cola, lemonade, lemonade, water...
    }

    if (drinkTray.length > 5) { //drop the last item
        drinkTray.pop();
        console.log(`Hey guys, I brought a ${drinkTray}!`);
    }
}

bringDrinks();


