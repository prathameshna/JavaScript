'use strict';

/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 899);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 999);


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LH234';
const pratham = {
    name: 'Prathamesh Nadhe',
    passport: 23569874125,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 23569874125) {
        alert('Check in :)');
    } else {
        alert('Wrong passport!');
    }
}

// checkIn(flight, pratham);
// console.log(flight);
// console.log(pratham);

// IS the same as doing
// const flightNum = flight;
// const passenger = pratham;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(pratham);
checkIn(flight, pratham);


///////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWorld = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWorld);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('🙏');
}

document.body.addEventListener('click', high5);

['Pratham', 'Sunny', 'Saurabh'].forEach(high5);


///////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Pratham');
greeterHey('Nanu');

greet('Hello')('Pratham');

// Challenge
const greetArr = greeting => name => {
    console.log(`${greeting} ${name}`);
}

greetArr('Hi')('Pratham');

*/

///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name
        });
    }
};

lufthansa.book(239, 'Prathamesh Nadhe');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah William');
console.log(eurowings);

book.call(lufthansa, 239, 'D.B. Cooper');

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'D.B. Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah William');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');
bookLX(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Prathamesh Nadhe');
bookEW23('Saurabh Galande');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    // console.log(this);

    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application 
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.18);
console.log(addGST(200));
console.log(addGST(18));

// By returning function
const addTaxRate = function (rate) {
    return function (value) {
        console.log(value + value * rate);
    }
}

const addGST1 = addTaxRate(0.18);
addGST1(200);