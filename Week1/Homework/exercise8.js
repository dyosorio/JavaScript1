'use strict';

// Exercise 8: Type checker

/*let x = 2;
let y = 4;
let visitedCities = ['Habana', 'MexicoCity', 'Amsterdam', 'Managua'];
let citiesIWantToVisit = ['Buenos Aires', 'Vienna', 'Sao Paulo'];

console.log(typeof(x) == typeof(y));
console.log(typeof(x) == typeof(visitedCities));
console.log(typeof(y) == typeof(x));
console.log(typeof(y) == typeof(visitedCities));
console.log(typeof(visitedCities) == typeof(x));
console.log(typeof(visitedCities) == typeof(citiesIWantToVisit));

console.log(typeof x);
console.log(typeof citiesIWantToVisit);

if (typeof(x) == typeof(y)) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof(visitedCities) == typeof(y)) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof(visitedCities) == typeof(citiesIWantToVisit)) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}
if (typeof(citiesIWantToVisit) == typeof(x)) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}*/

let x = 2;
let y = 4;
let visitedCities = ['Habana', 'MexicoCity', 'Amsterdam', 'Managua'];
let citiesIWantToVisit = ['Buenos Aires', 'Vienna', 'Sao Paulo'];

function checker(arg1, arg2){

    if (typeof(arg1) == typeof(arg2)) {
        return('SAME TYPE');
    } else {
        return('Not the same...');
    }
}

console.log(checker(x, y));
console.log(checker(x, visitedCities));
console.log(checker(visitedCities, citiesIWantToVisit));
console.log(checker(y, citiesIWantToVisit));

console.log('--testing checker function--')

console.log(checker(2, 4));
console.log(checker('auto', 4));
console.log(checker('auto', ['apple', 'banana', 'orange']));
console.log(checker(['bike', 'car', 'bus'], ['apple', 'banana', 'orange']));