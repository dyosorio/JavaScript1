//Exercise 4: The reading list

'use strict';

// Keep track of which books you read and which books you want to read!

//Follow the steps:

//Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet). *done!*
//Loop through the array of books. *done!*
//For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". *done!*
//Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details *done!*
//If you haven't read it log a string like You still need to read "The Lord of the Rings" *done!*

const myBooks = [
    {
      Title: '"The Catcher in the Rye"',
      Author: 'JD Salinger',
      alreadyRead: true,
      
    },
    {
        Title: '"The Great Gatsby"',
        Author: 'F. Scott Fitzgerald',
        alreadyRead: false,
        
    },
    {
        Title: '"Crime and Punishment"',
        Author: 'Fjodor Dostojevski',
        alreadyRead: true,
        
    }
]

myBooks.forEach(function (item, index) {
	if(item.alreadyRead === true){
		console.log(item.Title + ' by ' + item.Author +'.' + ' Already read ' + item.Title);
	}else{
		console.log(item.Title + ' by ' + item.Author +'.' + ' You still need to read ' + item.Title + '.');
	}
	
});

//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of