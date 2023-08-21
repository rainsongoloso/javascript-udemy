'use strict';

// const bookings = [];

// // ES6
// const createBooking = function(flightNum, numPassengers = 1, price = 150 * numPassengers) {
//     //ES5 
//     // numPassengers = numPassengers || 1;
//     // price = price || 500;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };

//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123',2,200);
// createBooking('LH123',4);
// createBooking('LH123',undefined, 500);

// const flight = 'LH234';
// const rainson = {
//     name: 'Rainson A. Goloso',
//     passportNum: 2211231
// }

// // const checkIn = function(flightNum, passenger) {
// //     flightNum = 'LH999';
// //     passenger.name = 'Mr. ' + passenger.name;

// //     if (passenger.passportNum === 2211231) {
// //         alert('Check in');
// //     } else {
// //         alert('Wrong passport!');
// //     }
// // };

// // checkIn(flight, rainson);
// // console.log(flight);
// // console.log(rainson);

// const newPassport = function(person) {
//     person.passportNum = Math.trunc(Math.random() * 1000000);
// }

// newPassport(rainson);
// checkIn(flight, rainson);
// console.log(rainson);


//CALLBACK FUNCTION

// higher function and lower function
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best`, upperFirstWord);
transformer(`JavaScript is the best`, oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('🖐');
};

document.body.addEventListener('click', high5);
['Rainson', 'Rainer', 'Rainel'].forEach(high5);


// Functions Returning functions
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Rainson');
greeterHey('Jonas');

// Arrow Function my version
const greeted = (greets) => {
    return function(named) {
        console.log(`${greets} ${named}`);
    };
};

const greeter = greet('🖐');
greeter('Rainson');
greeter('Rainel');

greeted('Hi!')('Rainson');

// Arrow Function Jonas version
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Rain');
greetArr('Son');

// My example name suffix
const suffixes = suffix => names => console.log(`${suffix} ${names}`);

const mrSuffix = suffixes('Mr.');
mrSuffix('Rainson');
mrSuffix('Rainel');
mrSuffix('Rainer');
mrSuffix('Rainero');

const msSuffix = suffixes('Ms.');
msSuffix('Helen');
msSuffix('Alexia');
msSuffix('Glorymae');

// Call and Apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(240, 'Rainson Goloso');
lufthansa.book(300, 'Rainel Goloso');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Call Method
book.call(eurowings, 98, 'Helen Goloso');
book.call(lufthansa, 200, 'Rainson Goloso');

console.log(lufthansa.bookings);
console.log(eurowings.bookings);

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
};

book.call(swiss, 500, 'Pedro Paps');
console.log(swiss.bookings);

// Apply Method
const flightData = [600, 'Tom Hardly'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookLH(24, 'John Williams');

const bookEW24 = book.bind(eurowings, 24);
bookEW24('Rainson Goloso');
bookEW24('Rainer Goloso');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buyPlane').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.12);

console.log(addVat(100));
console.log(addVat(5000));
console.log(addVat(500));

// Challenge function returning function
const addTaxRecur = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};

const addtax = addTaxRecur(0.12);
addtax(500);
addtax(600);

const runOnce = function() {
    console.log('This will never run again');
};

runOnce();

// IIFE (Immediately Invoked function expressions)
(function(){
    console.log('This will never run again');
    const isPrivate = 23;
})();

(() => console.log('This Will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 44;
}

// closures
const secureBooking = function () {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} Passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();


// Example 1
let f;

const g = function() {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function() {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);
// Re-assigning the function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait){
    const perGroup = n/3;

    setTimeout(function() {
        console.log(`We are now Boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};


const perGroup = 1000;
boardPassengers(200, 2);