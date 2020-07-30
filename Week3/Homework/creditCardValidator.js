'use strict';

//4. PROJECT: Credit Card Validator

//Write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.

//Input must be 16 characters
//All characters must be numbers
//At least two different numbers should be represented
//The last number must be even
//The sum of all the numbers must be greater than 16

const validateCreditNumber = creditCardNumber => {
    let isValid = true; //variable must be true in all cases;

    //function argument must contain 16 characters
    if (creditCardNumber.length !== 16) {
    console.log(`Invalid! The input ${creditCardNumber} should contain 16 characters`);
    return isValid = false;
    }

    //all digits must be numbers, so they need to be between 0 and 9.
    let digitChecker;
    for (let index = 0; index < creditCardNumber.length; index++) {
        const element = creditCardNumber[index];

        if (element >= 0 && element <= 9){
        digitChecker = true;
        } else{
        digitChecker = false;
        break
        } 
    }

    if(digitChecker == false){
        console.log(`Invalid! The input ${creditCardNumber} should contain only numbers!`)
        return isValid = false;
    }

  //Two different numbers represented
  //The Set constructor lets you create Set objects that store unique values of any type.
  const uniqueSet = new Set(creditCardNumber); //all duplicates will be removed.
  const arrayFromSet = Array.from(new Set(uniqueSet));//convert set to Array

  if (arrayFromSet.length == 1) {
    console.log(`Invalid! The input ${creditCardNumber} should contain at least 2 different types of numbers!`);
    return isValid = false;
  }

  //last number must be even
  let arrayOfDigits = creditCardNumber.toString().split('').map(Number);//convert creditCardNumber to array
  let lastDigit = arrayOfDigits.pop();
  if (lastDigit % 2 != 0) {
      console.log('very false');
  } else {
      console.log('valid! whoohooo');
  }


  // sum of all numbers must be 16
  

};

validateCreditNumber('1111111111111135');
//let arrayOfDigits = creditCardNumber.toString().split('').map(Number);