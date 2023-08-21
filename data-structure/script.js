"use strict";
const weekdays1 = ['mon', 'tue', 'wed', 'thurs', 'fri','sat','sun'];

const openingHours = {
  [weekdays1[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays1[5]]: {
    open: 0,
    close: 24,
  },
}
const restaurant = {
  name: "Classico italiano",
  location: "Via angelo tavanti 23, firenze, italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring in parameter
  // Destructuring in parameter with defaults
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "Dampas",
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza(mainIng, ...otherIng){
    console.log(mainIng);
    console.log(otherIng);
  }
};

restaurant.orderDelivery({
  time: "19:00",
  address: "Janssen Heights dampas",
  mainIndex: 2,
  starterIndex: 3,
});

restaurant.orderDelivery({
  address: "Janssen Heights dampas",
});

// Destructuring Arrays
const arr = [2, 3, 4];

const [x, y, z] = restaurant.location;

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested Destructuring array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [q = 1, w = 1, t = 1] = [2, 3];
console.log(q, w, t);

// Destructuring Objects
// Use curly braces if Object Destructuring
const { name, hours, categories } = restaurant;
console.log(name, hours, categories);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 2, c: 6 };
({ a, b } = obj);
console.log(a, b);

// Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Spread operator: unpacked arrays
console.log("Spread operator")
const arr1 = [7,8,9]
const newArr = [1, 2, ...arr1]

console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7 ,8 ,9);

const newMenu = [...restaurant.mainMenu, 'Gucci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const joinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinedMenu);

// Iterables: arrays, strings, maps, sets. Not Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log(...letters);

const ingredients = [
  // prompt("Let\'s make a pasta Ingredient 1"), 
  // prompt('Ingredient 2?'), 
  // prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundIn: 1998, ...restaurant, founder: 'Rainson Goloso'};

console.log(newRestaurant)
console.log(restaurant)

const newRestaurantCopy = {...restaurant};
newRestaurantCopy.name = 'John Peterson';
console.log(newRestaurantCopy);
console.log(restaurant);

// 1. Destructuring
// Rest Pattern and Parameters
// Spread, because on RIGHT side of =
const arr2 = [1,2, ...[3,4]];

// Rest, because on LEFT side of =
const [a1, b2, ...others] = [1,2,3,4,5];
console.log(a1,b2,others);

const [pizza, ,risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays)

// 2. Functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum)
}

add(2,3);
add(5,6,7,1,2)
add(53,776,24,1,1,2,1)

restaurant.orderPizza('ham','cheese','pineapple','sausage');
restaurant.orderPizza('ham');

// Short Circuiting (&& and ||)
console.log('---- OR ----');
// Return first the true value
const test = null || undefined || 'Hello' || 2;
console.log(test)
console.log('' || 'Jonas')
restaurant.numGuests = 0;
const guest1  = restaurant.numGuests || 10;
console.log(guest1);

console.log('---- AND ----');
// Evaluate all if true else false all
console.log(0 && 'Jonas');
console.log(null && 'Jonas');
console.log('Hello' && 82 && null && 'jonas');
restaurant.orderPizza && restaurant.orderPizza('mushroom','cheese');

// Nullish: null and undefined (NOT 0 or '')
// if not null and undefined continue
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Logical operators
const rest1 = {
  name: 'Rainson',
  // numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'Goloso',
  owner: 'Rainson Goloso'
}

// OR assignment operator
// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu1) console.log(item);

for (const [i, el] of menu1.entries()) {
  console.log(`${i+1}: ${el}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon','tue','wed','thurs','fri','sat','sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.order1?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [{name: 'Jonas', email:'hello@jonas.io'}];
console.log(users[0]?.name ?? 'User array empty');

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  openStr +=`${day}, `;
}
console.log(openStr);

// Property Value
const value = Object.values(openingHours);
console.log(`// Property Value`);
console.log(value);

// Entire object
const entries = Object.entries(openingHours);
console.log(`// Entire object`)
console.log(entries);

for (const [key, {open, close}] of entries){
  console.log(`On ${key} we Open at ${open} and Close at ${close}`);
}

// Sets
// Disc = set must be unique
// sets is iterable
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);

console.log(ordersSet);
console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter','Chef','Waiter','Manager','Waiter','Chef'];
const staffUnique = new Set(staff);
const staffUniqueArr = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUniqueArr);

console.log(staffUnique.size);
console.log(new Set('rainsongoloso').size);

// Map
const rest = new Map();
rest.set('name', 'Burger big');
rest.set(1, 'Rainson Goloso');
console.log(rest.set(2, 'Jogtrot'));

rest.set('categories', ['Italian', 'Pizzaria', 'Silogan', 'Vegetarian', 'Sabaw'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open ')
.set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete('name');
console.log(rest);
console.log(rest.size);

const arr3 = [1, 2];
rest.set(arr3, 'Test');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr3));

const question = new Map([
  ['question', 'What is the best games?'],
  [1, 'Overwatch 2'],
  [2, 'Dota 2'],
  [3, 'Valorant'],
  ['correct', 1],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const ans = 3;
console.log(ans);
console.log(question.get(question.get('correct') === ans));

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Working with strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('b737'[0]);

console.log(airline.length);
console.log('b737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4,7)); // Air

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
  // B and E middle seat
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E')
  console.log('You got the Middle Seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@rain.com';
const loginEmail = '  hEllo@rain.com';

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(loginEmail);

console.log(email === normalizeEmail);

// Replacing ₱
const priceGB = '500,98£';
const pricePhp = priceGB.replace('£', '₱').replace(',', '.');
console.log(priceGB);
console.log(pricePhp);

const announcement = "All passenger come to boarding door 23. Boarding door 23!";
console.log(announcement);
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); // regex

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')){
  console.log('Part of the new Airbus Family');
}

// Practice Exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase();

  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log("You are not allowed on Board");
  } else {
    console.log("Welcome on board");
  }
};

checkBaggage("I have a knife and a gun in my baggage");
checkBaggage("I have a water, soap and towel in my baggage");
checkBaggage("I bring my laptop and my gaming keyboard");
checkBaggage("I bring my gun and my gaming keyboard");

// String 3
console.log("a+very+nice+string".split('+'));
console.log("rainson goloso".split(' '));

const [firstname, lastname] = 'Rainson Goloso'.split(' ');
const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name){
    const names = name.split(' ');
    const namesUpper = [];
    
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // Slice method
        namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // Replace Method
    }
    
    console.log(namesUpper.join(' '));
}

capitalizeName('rainson goloso');
capitalizeName('john cena');
capitalizeName('rainel goloso')

// Padding
const message = 'Go to gate 23';

console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Rainson'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

const credit1 = maskCreditCard(9876551);
console.log(credit1);
console.log(maskCreditCard("11222876111"));

// Repeat
const message2 = 'Bad Weather... All Departures Delayed';
console.log(message2.repeat(5));

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}

planesInLine(5);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase();

for (const f of flights.split('+')){
  const [type, from, to, time] = f.split(';');
  const output = `${type.startsWith('_Delayed') ? '🚩' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':', 
    'h')})`.padStart(44);

  console.log(output);
}

function getDivisorsCnt(n){
  let counter = 0;
  const divisors = [];
  for(let i = 1; i < n+1; i++){
    if(n%i === 0){
      counter++;
      console.log(`Divisories = ${i}`); 
    }
    
  }
  console.log(`Divisors = ${counter}`);
}

getDivisorsCnt(1);
getDivisorsCnt(10);
getDivisorsCnt(11);
getDivisorsCnt(54);

function isPalindrome(x) {
  const xLength = x.length;
  const palin = [];

  for(let i = xLength-1; i >= 0; i--){
    palin.push(x[i]);
  };

  if(palin.join('').toLowerCase() === x.toLowerCase()) console.log(true) ;
  return palin.join('').toLowerCase() === x.toLowerCase() ?true : false;
}

isPalindrome("a");
isPalindrome("Abba");
isPalindrome("hello");
isPalindrome("");

function XO(str) {
  const lower = str.toLowerCase();
  let cO = 0;
  let cX = 0;

  for(let i = 0; i < str.length; i++){
    if(lower[i] === 'x') cX++;
    if(lower[i] === 'o') cO++;
  }
  
  return cO === cX || cO === 0 && cX === 0 ? true : false;
}

XO('xo');
XO("xxOo");
XO("xxxm");
XO("Oo");
XO("ooom");
XO("zpzpzpp");

