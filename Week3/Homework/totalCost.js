'use strict';

//Exercise 5: Total cost is ...

//Create an object named cartForParty with 5 properties. Each property should be a grocery item and hold a number value (like 0.99)
//Write a function called calculateTotalPrice
//It takes 1 argument: an object that contains properties that only contain number values
//Loop through the object and add all the number values together
//Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
//Call the function 1 time, giving it the object cartForParty as an argument

const cartForParty = {
    beer : 6.99,
    wine: 3.95,
    chips: 1.45,
    guacamole: 5.5,
    cake: 10.99
}
    function calculateTotalPrice(myObject){

        const result = Object.values(myObject).reduce((a,b) => a+b);
        //Object.values(myObject) to loop over the objects properties
        //The reduce() method will add the values of the accumulator a and currentValue b. Check the source below.
    
        const total = Math.round((result + Number.EPSILON) * 100) / 100; // return result with 2 decimals 

        console.log(`Total: €${total}`)

    }
        

calculateTotalPrice(cartForParty);

//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
