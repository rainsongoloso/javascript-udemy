"use strict";

//////////////////////////////////////////////////////////////
/*
let hasDiversLicense = false;
const passTest = true;

if (passTest) hasDiversLicense = true;
if (hasDiversLicense) console.log('I can drive');


// Functions
// Arrow Function

const calcAge = birthYear=> 2037 - birthYear;
const age = calcAge(1997);
console.log(age);

const yearsUnitRetirement = (birthYear, firstname) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement <= 0){
        console.log(`${firstname} is retired`);
        return -1;   
    } else {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    }
}

console.log(yearsUnitRetirement(1997, 'Rainson'));

const cutPieces = function(fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} pieces of oranges`;
    return juice;
};

console.log(fruitProcessor(2,3));
*/

//////////////////////////////////////////////////////////////
/*
// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2009, 2020);

console.log(friends[0]);
console.log(friends[1]);

//Exercise 
const calcAge = function (birthYear) {
    return 2033 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friend1s = ['Michael', 'Steve', 'Peter'];

// Add elements
const newLength = friend1s.push('Jay');
console.log(friend1s);
console.log(newLength);

friend1s.unshift('John'); // add elements in beginning
console.log(friend1s);

// Remove elements
friend1s.pop(); // remove element at last
const popped = friend1s.pop();
console.log(`Remove elements at Last and store the removed element: ${popped}`);
console.log(friend1s);

friend1s.shift(); // remove elements at First
console.log(`Remove elements at First: ${friend1s}`);

// return -1 if not in array if contained return the value
console.log(friend1s.indexOf('Steven'));
console.log(friend1s.indexOf('Steve'));

// return false if not in array if contained return true
console.log(friend1s.includes('Steve'));
console.log(friend1s.includes('24'));
*/

//////////////////////////////////////////////////////////////
/*

// Objects oriented
const myProfile = {
    firstName: 'Rainson',
    lastName: 'Goloso',
    birthYear: 1997,
    gender: 'Male',
    job: 'Programmer',
    myFriends: ['Arnold', 'Kim', 'Danilo', 'Paul'],
    location: 'Philippines',
    facebook: 'rainsongoloso',
    hasDriversLicense: true,

    calAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    myFriendsDiscription: function(){
        return `${this.firstName} ${this.lastName} has ${this.myFriends.length} friends, and his best friend is called ${this.myFriends[0]}. I'am located and lived in the ${this.location}`;
    },

    getSummary: function(){
        return `${this.firstName} ${this.lastName} is a ${this.calAge()}-years old ${this.job}, and ${this.gender === 'Male' ? 'He' : 'She'} has ${this.hasDriversLicense ? 'a' : 'no'} Drivers License`;
    }
};

console.log(myProfile);

// Dot notation
console.log(myProfile.firstName);

// Bracket notation
console.log(myProfile['lastName']);

// const testProf = prompt("What do you want to see in my profile? firstName, lastName, aage, job, myFriends");
// console.log(testProf);

// if(myProfile[testProf]){
//     console.log(myProfile[testProf]);
// } else {
//     console.log('Wrong!');
// }


// Challenges
console.log(myProfile.myFriendsDiscription());
console.log(myProfile.getSummary());
*/

//////////////////////////////////////////////////////////////
// Loops
const rainson = [
  "Rainson",
  "Goloso",
  2022 - 1997,
  "programmer",
  ["Rain", "Son"],
  true,
];

const types = [];

for (let i = 0; i < rainson.length; i++) {
  // Reading the rainson array
  console.log(rainson[i], typeof rainson[i]);

  // Filling type of array
  // types[i] = typeof rainson[i];
  types.push(typeof rainson[i]);
}

console.log(types);

const years = [1991, 1992, 1995, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// Continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < rainson.length; i++) {
  if (typeof rainson[i] !== "string") continue;

  console.log(rainson[i], typeof rainson[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < rainson.length; i++) {
  if (typeof rainson[i] === "number") break;

  console.log(rainson[i], typeof rainson[i]);
}

for (let i = rainson.length - 1; i >= 0; i--) {
  console.log(i, rainson[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You rolled the number ${dice}`);
  }
}

const reverseSeq = (n) => {
  let revers = [];
  for (let i = n.length; i > 0; i--) {
    revers.push(i);
  }
  return revers;
};

console.log(`ReversSeq: ${reverseSeq(5)}`);
