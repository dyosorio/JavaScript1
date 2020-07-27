'use strict';

//4. PROJECT: Grade calculator

//convert the score into a percentage - done!
//calculate what grade corresponds with that percentage - done!

//In this example this is what we would expect the function to return in the command line:
//You got a D (60%)!
//When writing the function, make use of the following grade scores:
//Grade A (90% - 100%)
//Grade B (80% - 89%)
//Grade C (70% - 79%)
//Grade D (60% - 69%)
//Grade E (50% - 59%)
//Grade F (0% - 49%)
//These are the requirements your project needs to fulfill:

//Make a JavaScript file - done!
//Use either a switch or if/else statement - done!
//Write at least 2 comments - done!
//Make the return value of the function a template string - done!
//Use node from the command line to test if your code works as expected - done!


//First step: write a function that converts the score into a percentage

function gradeCalc(grade) {
    //Second step: convert the score into percentage. The toLocaleString() method converts the score to a percentage representation of the number, and then returns its value as a string.
      var num= Math.round(grade);
      var s = Number(num/100).toLocaleString(undefined,{style: 'percent', maximumFractionDigits:0}); 
      //return s; make sure var s is returning the score as a percentage. 

      var a = 'A';
      var b = 'B';
      var c = 'C';
      var d = 'D';
      var e = 'E';
      var f = 'F';
  
      //Third step: calculate what grades correspond to what percentage.
      if (grade <= 100 && grade >= 90) {
          return `You got and ${a} (${s})!` //Fourth step: used Template Literal to use var in a string
      } if (grade <= 89 && grade >= 80) {
          return `You got a ${b} (${s})!`
      } if (grade <= 79 && grade >= 70) {
          return `You got a ${c} (${s})!`
      }if (grade <= 69 && grade >= 60) {
          return `You got a ${d} (${s})!`
      }if (grade <= 59 && grade >= 50) {
          return `You got an ${e} (${s})!`
      } else {
          return `You got an ${f} (${s})!`
      }
        
    }
  
  console.log(gradeCalc(80.3));
  

   