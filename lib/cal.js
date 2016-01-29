#!/usr/bin/env node --harmony_destructuring

'use strict';

// npm install yargs

// 1. get current month outputting
// 2. get all months outputting to show whole year
// 3. be able to accept arguments at the command line using yargs to run this cal.js



console.log(process.argv);


const month = require('./month');
const zellars = require('./zellars');

console.log('butt');

// get the proper heading for the month
month.displayHeader() + month.showDays();


// get the first day of the given month
// zellars.getDay();




// 7 - zellars, then  % 7
