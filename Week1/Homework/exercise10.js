'use strict';

// Exercise 10: Compare arrays

let maleWriters = ['Roberto Bolaño', 'Gabriel García Márquez', 'Carlos Fuentes', 'Julio Cortázar'];
let nicaraguanWriters = ['Rubén Darío', 'Ernesto Cardenal', 'Gioconda Belli', 'Sergio Ramírez', 'Claribel Alegría', 'Alfonso Cortés', 'Francisco Ruiz Udiel'];
let femaleWriters = ['Isabel Allende', 'Marcela Serrano', 'Gabriela Mistral', 'Alfonsina Storni'];

console.log(maleWriters.length);
console.log(nicaraguanWriters.length);
console.log(femaleWriters.length);

function equalLength(arg1, arg2) {
    if (arg1.length === arg2.length){
        return ('They are the same!');
    } else {
        return ('Two different sizes');
    }
}

console.log(equalLength(maleWriters, nicaraguanWriters));
console.log(equalLength(maleWriters, femaleWriters));