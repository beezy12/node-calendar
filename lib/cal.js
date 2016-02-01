#!/usr/bin/env node --harmony_destructuring

'use strict';

// npm install yargs

// 1. get current month outputting
// 2. get all months outputting to show whole year
// 3. be able to accept arguments at the command line using yargs to run this cal.js



console.log(process.argv);


const month = require('./month');
const zellars = require('./zellars');


// get the proper heading for the month
var butt = month.displayHeader(1, 2016) + month.getFirstDay(2016, 1, 31);
console.log(butt);


// var zell = month.getFirstDay(2016, 1, 31);
// console.log('zell', zell);



// get the first day of the given month to start everything off
// 20 - zellars * 3 ????    or determine the width of each number first
// use 7 - zellars to determine spaces before the first day of the month, then % 7 to insert line breaks



// calc


