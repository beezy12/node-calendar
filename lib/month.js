'use strict';


// load the full build
var _ = require('lodash');

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


	return firstTwo + '\nSu Mo Tu We Th Fr Sa\n';
};



calMaker.getMonthDays = (month,year) => {
    var monthDays = new Date(year, month, 0).getDate();
    console.log('------>', monthDays);

    return monthDays;
}


calMaker.showDays = (numOne, numTwo) => {
	var numDays = calMaker.getMonthDays(numOne, numTwo);
	var dayss = _.range(numOne, numDays + 1);

	// for (var i = 0; i < dayss.length; i++) {
	// 	if(dayss[i] % 7 === 0) {
	// 		'\n'
	// 	}
	// }
	console.log(dayss);

	return dayss;
};





module.exports = calMaker;

