'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest)
    hasDriversLicense = true;

if (hasDriversLicense) 
    console.log('I can drive :D');


// const interface = 'Auido';



function logger() {
    console.log('My name is Prathamesh');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1997);

// function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1997);

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1997);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirment = 58 - age;
    return `${firstName} retires in ${retirment} years.`;
}

console.log(yearsUntilRetirement(1997, 'Prathamesh'));
console.log(yearsUntilRetirement(1967, 'Vilas'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const oragnePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${oragnePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = (birthYear) => {
    return 2022 - birthYear;
} 


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear)
    const retirment = 58 - age;
    if( retirment > 0) {
        return `${firstName} retires in ${retirment} years.`;
    } else {
        return `${firstName} has already retired :)`;
    }
}

console.log(yearsUntilRetirement(1997, 'Prathamesh'));
console.log(yearsUntilRetirement(1900, 'Vilas'));


//  Arrays  //

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991,1997,2022);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length -1 ]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Pratham';
const pratham = ['Prathamesh', 'Nadhe', 2022-1997, 'Developer', friends];

console.log(pratham);

// Exercise

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1922, 1967, 1997, 2010, 2018];

console.log(calcAge(years));


for(let i = 0; i < years.length; i++){
    console.log(calcAge(years[i]));
}



const friends = ['Michael', 'Steven', 'Peter'];

// Add Friends
friends.push('Jay');
console.log(friends);

friends.unshift("john");
console.log(friends);

// Remove Friends
friends.pop();  // last
friends.pop();
console.log(friends);

friends.shift();    // frist
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(25);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(25));

// Objects

const prathamArray = [
    'Prathamesh', 
    'Nadhe', 
    2022-1997, 
    'Developer', 
    ['Michael', 'Steven', 'Peter']
];

const pratham = {
    firstName: "Prathamesh",
    lastName: "Nadhe",
    age: 2022 - 1997,
    job: 'Developer',
    friends: ['Michael', 'Steven', 'Peter']
};

console.log(pratham);
console.log(pratham.firstName);
console.log(pratham['lastName']);
console.log(pratham.friends);

const interestedIn = prompt( "What do you want to know about Pratham? Choose between firstName, lastNane, age, job, and friends");

if(pratham[interestedIn]){
    console.log(pratham[interestedIn]);
} else{
    console.log('Wrong request! Choose between firstName, lastNane, age, job, and friends');
}

pratham.location = 'India';
pratham['instagram'] = 'pratham_nadhe';
console.log(pratham);

console.log(`${pratham.firstName} has ${pratham.friends.length} friends and his best friend is called ${pratham.friends[0]}`);



const pratham = {
    firstName: "Prathamesh",
    lastName: "Nadhe",
    birthYear: 1997,
    job: 'Developer',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDrivingLicense: true,

    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old developer and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license.`;
    }
    
};

console.log(pratham.calcAge());

console.log(pratham.age);

console.log(pratham.getSummary());


// Loops //

// for loop
// for loop keeps running while condition is TRUE

for(let rep = 1; rep<= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}.`);
}


const pratham = [
    'Prathamesh', 
    'Nadhe', 
    2022-1997, 
    'Developer', 
    ['Michael', 'Steven', 'Peter'],
    true
];

for(let i = 0; i < pratham.length ;i++){
    console.log(pratham[i], typeof pratham[i]);
}


const years = [1991, 1997, 2008, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

// console.log(ages);

// continue and break
console.log('---- ONLY STRINGS ----');
for(let i = 0; i < pratham.length ;i++){
    if(typeof pratham[i] !== 'string') continue;

    console.log(pratham[i], typeof pratham[i]);
}

console.log('---- BREAK WITH NUMBER ----');
for(let i = 0; i < pratham.length ;i++){
    if(typeof pratham[i] === 'number') break;

    console.log(pratham[i], typeof pratham[i]);
}



const pratham = [
    'Prathamesh', 
    'Nadhe', 
    2022-1997, 
    'Developer', 
    ['Michael', 'Steven', 'Peter'],
    true
];

for (let i = pratham.length -1; i >= 0; i--) {
    console.log(i, pratham[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`    Starting Exercise ${exercise} `);
    for(let rep = 1; rep< 6; rep++) {
        console.log(`Exercuse ${exercise}: Lifting weights repetition ${rep}.`);
    }
}

*/

// while Loop 

// for(let rep = 1; rep<= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}.`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}.`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}