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
let drinkTypes = ['cola', 'lemonade', 'water'];


function getDrinks(arrTray, arrTypes) {

    for (let i = 1; i < 2; i++) {

        for (let i = 0; i < 2; i++) {
            arrTray.push(arrTypes[0]) // cola // cola, cola
        }
    
        for (let i = 1; i < 3; i++) {
            arrTray.push(arrTypes[1]); //cola, cola, lemonade // cola, cola, lemonade, lemonade
        }
    
        for (let i = 2; i < 4; i++) {
            arrTray.push(arrTypes[2]); //cola, cola, lemonade, lemonade, water...
        }
    }

    if (arrTray.length > 5) { //drop the last item
        arrTray.pop();
        console.log(`Hey guys, I brought a ${arrTray}!`);
    }

}

getDrinks(drinkTray, drinkTypes);



