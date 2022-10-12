'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        let output = `${firstName},  you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Pratham';
calcAge(1995);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);
};
calcAge(1997);

const calcAgeArrow = birthYear => {
    console.log(2022 - birthYear);
    console.log(this);
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Nanu';

const pratham = {
    firstName: 'pratham',
    year: 1997,
    calcAge: function () {
        // console.log(this);
        console.log(2022 - this.year);

        // solution 1
        // const self = this;  // self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
pratham.greet();
pratham.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log();
addExpr(2, 5, 8);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Pratham',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);

*/

let lastName = 'Arote';
let oldLastName = lastName;
lastName = 'Nadhe';

console.log(lastName, oldLastName);

const ankita = {
    firstName: 'Ankita',
    lastName: 'Arote',
    age: 25,
};

const marriedAnkita = ankita;
marriedAnkita.lastName = 'Nadhe';

console.log('Before marriage: ', ankita);
console.log('After marriage: ', marriedAnkita);

// marriedAnkita = {};


// Copying objects
const ankita2 = {
    firstName: 'Ankita',
    lastName: 'Arote',
    age: 25,
    famity: ['Nitin', 'Akhil', 'Alka'],
};

const ankitaCopy = Object.assign({}, ankita2);
ankitaCopy.lastName = 'Nadhe';

ankitaCopy.famity.push('Prathamesh');
ankitaCopy.famity.push('Shubhangi');

console.log('Before marriage: ', ankita2);
console.log('After marriage: ', ankitaCopy);