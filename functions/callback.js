'use strict';

// let sum = 0;
// const collectMsg = [];

// const totalMSG = function (items) {
//    sum +=items; 
// }

// const thisIsFunction = function(totals) {
//     const msg = document.getElementById("num").value;
//     collectMsg.push(msg);
//     console.log(collectMsg);
//     console.log(sum);
// }

// document.getElementById("btn").addEventListener('click',thisIsFunction(totalMsg));

let total = 0;

const multiply = function(num) {
    for(let i = 0; i < num.length; i++){
         total *= num[i];
    };
    return total;
};

const addition = function(num) {
    for(let i = 0; i < num.length; i++){
        total += num[i];
    };
    return total;
};

// Higher order function
const displayTotal = function(num, fn) {
    console.log(`Number Passed: ${num}`);
    console.log(`Total of all numbers passed: ${fn(num)}`);
    console.log(`Function name: ${fn.name}`);
};

displayTotal([1,2,3,4], addition);
displayTotal([1,2,3,4], multiply);


