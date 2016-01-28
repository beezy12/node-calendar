'use strict';


// load the full build
var _ = require('lodash');

const calMaker = {}



calMaker.displayHeader = (month, year) => {

	let monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	let firstTwo = `${monthArray[month]} ${year}`;

	// get length of month and year, subtract that from 20 (width of calendar, and divide by 2 (to get even spacing on both sides)
	const spaceLength = Math.floor((20 - firstTwo.length) / 2);

	// loops through the spacelength and adds a new ' ' before the month and year (firstTwo) with each iteration
	for(let i = 0; i < spaceLength; i++) {
		firstTwo = ' ' + firstTwo;
	}
	console.log('-------->', firstTwo);



	return firstTwo + '\nSu Mo Tu We Th Fr Sa';
};

// calMaker.displayHeader(12, 2012)




// use range function to display days of month
// calMaker.showDays = (numOne, numTwo) => {
// 	var dayss = _.range(numOne, numTwo);
// 	console.log(typeof(dayss))

// 	return dayss;
// };


calMaker.showDays = (month,year) => {
    var dayss = new Date(year, month, 0).getDate();
    total = _.range()
    return dayss;
}







module.exports = calMaker;
