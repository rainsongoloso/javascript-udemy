'use strict';

const upcase = document.querySelector('h1');
upcase.value = 'Arrays';

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log(arr.slice(-1));
console.log(arr.slice(-4));
console.log(arr.slice(-5));

// Splice
// console.log(arr.splice(-1));
// arr.splice(-1);
// console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));


// AT method
const ar1r = [23, 11, 64];
console.log(ar1r[0]);
console.log(ar1r.at(0));

// getting last array element
console.log(ar1r[ar1r.length - 1]);
console.log(ar1r.slice(-1)[0]);
console.log(ar1r.at(-1));

// for each loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('----FOROF-----');
for (const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    };
};

console.log('----FOREACH----');
movements.forEach(function(movement, i, arr) {
    const node = document.createElement('li');
    document.getElementById("moveList").appendChild(node);
    if(movement > 0) {
        node.appendChild(document.createTextNode(`Movement ${i + 1}: You deposited ${movement}`));
    } else {
        node.appendChild(document.createTextNode(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`));
    };
});


// Map
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});


// Set
// _ = throw away variable, no value
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map){
    console.log(`${value}`);
});
