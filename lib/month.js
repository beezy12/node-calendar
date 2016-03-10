'use strict';


// this month module builds the parts needed to show a month output at the command line

const _ = require('lodash');
const zellars = require('./zellars');

const calMaker = {};


// assembles the month name with the year and days of the week listed below that. beginning the assembly of the month output
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
	//console.log('****', splitDaysArray);

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
	let counter = 1;

	for(var i = 1; i <= monthDays; i++) {
		if(i < 10) {
			i = ' ' + i + ' ';
			daysArray.push(i);
		} else {
			daysArray.push(i + ' ');
		}
	};

	// takes the commas out of the array
	// var splitArray = daysArray.join(' ');
	// console.log("no comma array", splitArray);
	// return splitArray;


	// this
	const firstDay = zellars.getDay(year, month, day);
	const start = ((firstDay - 1) * 3);
	console.log('start--->', start);
	// console.log(start);


	const spacesRoom = (start / 3);
	counter += spacesRoom;
	//console.log('pooooopy', counter);
	// console.log("*** spacesRoom here", spacesRoom);
	// console.log('counterrrrrrr', counter);



	const blank = ' '.repeat(start);
	// counter += 1;
	const threes = blank.length % 3;
	// console.log('now countahhhhh', counter);



	// console.log("out-----*", counter)
	let daysString = '';
	function writeDays () {
		for(var i = 0; i < daysArray.length; i++) {
			daysString += daysArray[i];
			if(counter % 7 === 0) {
				// console.log('---->', counter);
				daysString = daysString.trimRight();
				daysString += '\n';
			counter++;
			} else {
			counter++;

			}
		}
		daysString = daysString.trimRight();
		return daysString;
	}

	let empty = '';
	const dates = writeDays();
	//console.log(dates);
	empty += blank + dates;

	//console.log(empty.length);

	// if(empty.length % 7 === 0) {
	// 	// console.log('poop');
	// }

	return empty;
};





module.exports = calMaker;

