'use strict';

//Exercise 3: Be your own fortune teller

//Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
//Write a function named tellFortune.
//It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
//Randomly select values from the arrays.
//Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
//Call the function 3 times, by passing the arrays as the argument.

const numChildren = [0, 2, 3, 4, 6];
const partnerNames = ['Harry Potter', 'Honey Bunny', 'Bilbo Baggins', 'Cersei Lannister'];
const futureLocations = ['Amsterdam', 'Hogsmeade', 'The Shire', 'King\'s Landing'];
const futureJobs = ['Web developer', 'Fortune teller', 'Hand of the queen', 'Professor'];

function tellFortune(arrJob, arrLocation, arrPartner, arrChildren) {
    
    const randomJob = arrJob[Math.floor(Math.random() * arrJob.length)];
    const randomLocation = arrLocation[Math.floor(Math.random() * arrLocation.length)];
    const randomPartner = arrPartner[Math.floor(Math.random() * arrPartner.length)];
    const randomChildren = arrChildren[Math.floor(Math.random() * arrChildren.length)];
    //random = arr[Math.floor(Math.random() * arr.length)]; to select a random value out of any of the array indexes.

    console.log(`"You will be a ${randomJob} in ${randomLocation}, married to ${randomPartner} with ${randomChildren} kids."`)
}


tellFortune(futureJobs, futureLocations, partnerNames, numChildren);