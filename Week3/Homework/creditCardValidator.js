'use strict';

//4. PROJECT: Credit Card Validator

const validateCreditNumber = creditCardNumber => {
    let isValid = true; //variable must be true in all cases;

    //creditCardNumber must contain 16 characters
    if (creditCardNumber.length !== 16) {
        console.log(`Invalid! The input ${creditCardNumber} must contain 16 characters`);
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
        break;
        } 
    }

    if(digitChecker == false){
        console.log(`Invalid! The input ${creditCardNumber} should contain only numbers!`)
        return isValid = false;
    } 

  //Two different numbers represented
  //The Set objects store only unique values.
  const uniqueSet = new Set(creditCardNumber); //all duplicates will be removed.
  const arrayFromSet = Array.from(new Set(uniqueSet));//convert set to Array

  if (arrayFromSet.length == 1) {//if true, all digits are the same because set returns only the digits that are not repeating.
    console.log(`Invalid! The input ${creditCardNumber} should contain at least 2 different types of numbers!`);
    isValid = false;
    return; 
  } 

  //last number must be even
  let arrayOfDigits = creditCardNumber.toString().split('').map(Number);//convert creditCardNumber to array
  let lastDigit = arrayOfDigits.pop();
  if (lastDigit % 2 != 0) {
      console.log(`Invalid! The input ${creditCardNumber} should contain an even final number!`);
      isValid = false;
      return; 
  } 
  // sum of all numbers must be > 16
  //reduce will calculate the sum of the array of numbers/digits
  const sum = arrayOfDigits.reduce(function(a,b){return a + b;});
  if (sum < 16) {
    console.log(`Invalid! The sum of all the numbers in the input ${creditCardNumber} should be greater than 16`);
    isValid = false;
    return; 
} 

if (isValid = true) {
    console.log(`Success! The input ${creditCardNumber} is a valid credit card number!`)
}

};

validateCreditNumber('6666666666661666');
validateCreditNumber('9999777788880000');
validateCreditNumber('a92332119c011112');
validateCreditNumber('4444444444444444');
validateCreditNumber('1111111111111110');
validateCreditNumber('6666666666666661');
validateCreditNumber('1');


//-------------Instructions-------------------------
//let arrayOfDigits = creditCardNumber.toString().split('').map(Number);

//Write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.

//Input must be 16 characters
//All characters must be numbers
//At least two different numbers should be represented
//The last number must be even
//The sum of all the numbers must be greater than 16