'use strict';

/*4. PROJECT: Grade calculator

In this project you'll write a function that calculates grades. Let's say a student did a test and they got a 60 out of 100, this function will:

convert the score into a percentage - done
calculate what grade corresponds with that percentage, and
shows in the command line the result: the grade and the percentage done

In this example this is what we would expect the function to return in the command line:
You got a D (60%)!
When writing the function, make use of the following grade scores:

Grade A (90% - 100%)
Grade B (80% - 89%)
Grade C (70% - 79%)
Grade D (60% - 69%)
Grade E (50% - 59%)
Grade F (0% - 49%)
These are the requirements your project needs to fulfill:

Make a JavaScript file with a name that describes its contents - done
Use either a switch or if/else statement
Write at least 2 comments that explain to others what a line of code is meant to do
Make the return value of the function a template string, so you can insert variables!
Use node from the command line to test if your code works as expected
Good luck!*/

//write a function that converts the score into a percentage

function gradeCalc(grade) {
    //LocaleString 
      var num= grade;
      var s = Number(num/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0}); 
      //return s;
  
      if (grade < 100 && grade > 90) {
          return `You got and A (${s})!`
      } if (grade < 89 && grade > 80) {
          return `You got a B (${s})!`
      } if (grade < 79 && grade > 70) {
          return `You got a C (${s})!`
      }if (grade < 69 && grade > 60) {
          return `You got a D (${s})!`
      }if (grade < 59 && grade > 50) {
          return `You got an E (${s})!`
      } else {
          return `You got an F (${s})!`
      }
      
    }
  
  console.log(gradeCalc(92));
  
  /*witch (expression) {
      case value1:
        //Statements executed when the
        //result of expression matches value1
        [break;]
      case value2:
        //Statements executed when the
        //result of expression matches value2
        [break;]
      ...
      case valueN:
        //Statements executed when the
        //result of expression matches valueN
        [break;]
      [default:
        //Statements executed when none of
        //the values match the value of the expression
        [break;]]
    }*/