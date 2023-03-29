/*
let js = 'amazing';
if (js === 'amazing') alert("java script is fun!");
console.log(10 + 20 + 30 - 20 * 4)

//variables Name conventions..
let jonas_matilad = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(job2);
*/


//console.log(true);
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'manas');

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1998;
//birthYear = 1990;

//const job;
var job = 'programmer';
job = 'teacher';

lastName = 'nayak';
//lastName = 'ranjan'
console.log(lastName);
*/
/*
//math operator
const now = 2022
const ageManas = now - 1998;
const ageLiku = now - 2008;
console.log(ageManas, ageLiku);

console.log(ageManas * 2, ageLiku / 10, 2 ** 3);
// 2**3 means 2to the power of 3=2*2*2

const firstName = 'Manas';
const lastName = 'liku';
console.log(firstName + ' ' + lastName);
//assigement opperator
let x = 10 + 5;//15
x += 10;//x=x+10=25
x *= 4;//x=x*4=100
x++;//x=x+1
x--;
x--;
console.log(x);

//Comparision operator
console.log(ageManas < ageLiku);//>,<,>=.<=
console.log(ageLiku >= 18);

const isFullAge = ageLiku >= 18;

console.log(now - 1998 > now - 2008);
*/
/*
const now = 2022
const ageManas = now - 1998;
const ageLiku = now - 2008;

console.log(now - 1998 > now - 2008);

let x, y;
x = y = 25 - 10 - 5;//x=y=10,x=10
console.log(x, y);

const averageAge = (ageLiku + ageManas) / 2;
console.log(ageLiku, ageManas, averageAge);
*/
/*

#coding challenge--1
const massManas = 70;
const heightManas = 1.69;
const massLiku = 100;
const heightliku = 1.98;

const BMIManas = massManas / heightManas ** 2;
const BMILiku = massLiku / (heightliku * heightliku);
const LikuHigherBMI = BMILiku > BMIManas;

console.log(BMIManas, BMILiku, LikuHigherBMI);
*/
/*
const firstName = 'Manas';
const job = 'enginner';
const birthYear = 1998;
const year = 2023;
const manas = "I'm " + firstName + ',a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(manas);

const liku = `I'm ${firstName},a ${year - birthYear}year old ${job}!`;
console.log(liku);

console.log(`just a regular strings..`);
console.log('String with \n\
multiple\n\lines');

console.log(`string
multiple
line`);
*/
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Manas can start driving licence 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`mansa is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2008;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*

#coding challenge --2
const massManas = 70;
const heightManas = 1.69;
const massLiku = 100;
const heightliku = 1.98;

const BMIManas = massManas / heightManas ** 2;
const BMILiku = massLiku / (heightliku * heightliku);
console.log(BMILiku, BMIManas);

if (BMILiku > BMIManas) {
    console.log(`Liku's BMI(${BMILiku}) is higher then Manas's(${BMIManas}) !`)
} else {
    console.log(`Manas's BMI(${BMIManas})  is higher then Liku's(${BMILiku}) !`)
}
*/


/*
//type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('jonas'));
console.log(typeof (NaN));

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' year old')
console.log('23' - '10' - 3);
//acept '+' operatior all operatior are do math operation
console.log('23' / '2');

let n = '1' + 1;//'11'
n = n - 1;
console.log(n);
*/

/*

//5 falsy value :0,'',undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Manas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("don't spend it all;");
} else {
    console.log("You should get a job!")
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
//here height id undefined , undefied is a falsy value acc to js.
*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult:D(strict)');//Good practice in js
//18===19 false ,, '18'==18 true,,'18===18 false.
if (age == 18) console.log('You just became an adult:D (loose)');

const favourite = Number(prompt("what's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//'23'==23 ->false
    console.log('cool! 23 is an amazing number!');

} else if (favourite === 7) {
    console.log('7 is also a cool number')
}
else if (favourite === 9) {
    console.log('9 is also a cool number')
}
else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('why not 23?');
*/


/*
const hasDriversLicence = true;//A
const hasGoodVision = true;//B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

//const shouldDrive = hasDriversLicence && hasGoodVision;

// if (hasDriversLicence && hasGoodVision) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');

// }

const isTride = false;//c
console.log(hasDriversLicence && hasGoodVision && isTride);


if (hasDriversLicence && hasGoodVision && !isTride) {
    console.log('sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}
*/

//codding challange-3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);


// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy 🏆');
// }
/*

//bonus 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy 🏆');
} else {
    console.log('No one wins the trophy 😒')
}
*/

/*

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare threory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturaday':
    case 'sunday':
        console.log('Enjoy the weekend :D👌');
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');

} else if (day === 'tuesday') {
    console.log('prepare threory video');

} else if (day === "wednesday" || day === "thrusday") {
    console.log('write code example');

} else if (day === 'friday') {
    console.log('Record videos');

} else if (day === "saturday" || day === "sunday") {
    console.log('Enjoy the weekend :D👌');

} else {
    console.log("Not a valid day");
}
*/

/*
//this is a statement , here nothing will be as a output.
if (23 > 10) {
    const str = '23 is bigger';
}

//expression
const me = 'Manas';
console.log(`I'm ${2023 - 1998}  years old ${me}`);
*/


/*

const age = 20;

// age >= 18 ? console.log('I like to drink beer 🍺') : console.log('I like to drink water🚰');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/

/*
//coding chalange #4

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


