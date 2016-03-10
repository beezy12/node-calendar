#!/usr/bin/env node --harmony_destructuring

'use strict';


// in here is where the calendar is assembled from all the other modules



// console.log(process.argv);


const month = require('./month');
const zellars = require('./zellars');


// get the proper heading for the month
let output = month.outputCal(2016, 3, 1);



let showStuff = month.displayHeader(3, 2016) + output;
console.log(showStuff);


// let zell = month.getFirstDay(2016, 1, 31);
// console.log('zell', zell);



// get the first day of the given month to start everything off
// 20 - zellars * 3 ????    or determine the width of each number first
// use 7 - zellars to determine spaces before the first day of the month, then % 7 to insert line breaks



// calc


