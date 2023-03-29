'use strict';
/*()
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can Drive :D');

//These are future words that will be comming up next version ,we use strict mode at the begining thats why its getting error.
//const interface = 'Audio';
//const private = 223;
*/
/*
function logger() {
    console.log('My name is Manas');
}
//calling / running / invoking function.
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges .`;
    return juice;
}

//fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//function declaration

// here we can call the function befor declare.

//const age1 = calcAge1(1998);

function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1998);
//console.log(age1);

const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}
const age2 = calcAge2(1993);

console.log(age1, age2)
*/

/*
//Arrow function

const calcAge3 = birthyear => 2023 - birthyear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2023 - birthyear;
    const retirment = 65 - age;
    //return retirment;
    return `${firstName} retires in ${retirment} years`;
}
//console.log(yearsUntilRetirement(1998));

console.log(yearsUntilRetirement(1998, 'manas'));

console.log(yearsUntilRetirement(1993, 'liku'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges .`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

const calAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirment = 65 - age;

    if (retirment > 0) {
        console.log(`${firstName} retires in ${retirment} years`);
        return retirment;
    }
    else {
        console.log(`${firstName} is already  retired`);
        return -1;
    }
}


//return `${firstName} retires in ${retirment} years`;



console.log(yearsUntilRetirement(1998, 'manas'));
console.log(yearsUntilRetirement(1950, 'liku'));



