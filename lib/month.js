'use strict';


// load the full build
const _ = require('lodash');
const zellars = require('./zellars');

const calMaker = {};



calMaker.displayHeader = (month, year) => {

	let monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	let firstTwo = `${monthArray[month]} ${year}`;

	// get length of month and year, subtract that from 20 (width of calendar, and divide by 2 (to get even spacing on both sides)
	const spaceLength = Math.floor((20 - firstTwo.length) / 2);

	// loops through the spacelength and adds a new ' ' before the month and year (firstTwo) with each iteration
	for(let i = 0; i < spaceLength; i++) {
		firstTwo = ' ' + firstTwo;
	}
	// console.log('-------->', firstTwo);


	return `${firstTwo}${'\nSu Mo Tu We Th Fr Sa\n'}`;
};


// gets the actual digit of days in whatever month gets entered and returns it
calMaker.getMonthDays = (month,year) => {
    let monthDays = new Date(year, month, 0).getDate();
    //console.log('------>', monthDays);

    return monthDays;
}

// calls the above function getting the number of days in the month and uses that to run a range from 1 to that number
calMaker.showDays = (numOne, numTwo) => {
	let numDays = calMaker.getMonthDays(numOne, numTwo);
	let dayss = _.range(numOne, numDays + 1);

	//console.log(dayss);
	return dayss;

};


calMaker.splitDays = (numOne, numTwo) => {
	let daysArray = calMaker.showDays(numOne, numTwo);
	console.log(daysArray);
	let splitDaysArray = daysArray.map(function(el) {
		if(parseInt(el) < 10) {
			el = ' ' + el;
			return el
		} else {
			return el.toString();
		}

	}).join(' ')
	console.log('****', splitDaysArray);

	// for(var i = 0; i < splitDaysArray.length; i++) {
	// 	if(splitDaysArray[i] < 10) {
	// 		console.log(i);
	// 		splitDaysArray[i] += ' ';
	// 	}
	// }
	return splitDaysArray;

}



// call zellars to get the first day and put number of spaces in
// calMaker.getFirstDay = (year, month, day) => {
// 	const firstDay = zellars.getDay(year, month, day);
// 	console.log("====>>>>>", firstDay);

// 	let monthDays = new Date(year, month, 0).getDate();
// 	console.log('monthDays function heeeeer', monthDays);

// 	// for(var i = 1; i <= monthDays; i++) {
// 	// 	console.log('wtf', i);
// 	}
// }

calMaker.outputCal = function(year, month, day) {
	let monthDays = new Date(year, month, 0).getDate();

	let daysArray = [];

	for(var i = 1; i <= monthDays; i++) {
		if(i < 10) {
			i = ' ' + i;
			daysArray.push(i);
		} else {
			daysArray.push(i);
		}
	};

	var splitArray = daysArray.join(' ');
	console.log("no comma array", splitArray);
	// return splitArray;

	const firstDay = zellars.getDay(year, month, day);
	const start = 20 - (firstDay * 3);
	console.log('start', start);
};





module.exports = calMaker;

