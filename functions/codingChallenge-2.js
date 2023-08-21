'use strict';
///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge

Take the IIFE below and at the end of the function,
attach an event listener that changes the color of
the selected h1 elemet ('header') to blue, each time
the BODY element is clicked. Do NOT select the h1
element again!

and now explain to yourself (or someone around you)
WHY this worked! take all the time you need. Think
abount WHEN exactly the callback function is executed,
and what that means for the variable involved in this example.
*/


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.body.addEventListener('click',function(){
        header.style.color = 'blue';
    });
})();





