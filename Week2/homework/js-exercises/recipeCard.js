//Exercise 3: The recipe card

'use strict';

const myMeal = { 
	Name: 'Spare Ribs', 
	Serves: 4, 
	Ingredients: ['Pork ribs', 'Secret ingredient', 'BBQ sauce'] 
};

//for in...loop, because the other loops didn't show the property name only the property value.
for (const property in myMeal) {
  console.log(`${property}: ${myMeal[property]}`);
}


// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in