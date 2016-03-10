'use strict';

// this module holds the formula for zellar's congruence


function modifiedMonth(year, month) {
	if(month < 3) {
		month += 12;
	}

	return month;
}


function modifiedYear(year, month) {
	if(month < 3) {
		year -= 1;
	}

	return year;
}


function getDay(year, month, day) {
	let modMonth = modifiedMonth(year, month);
	let modYear = modifiedYear(year, month);

	let firstDay = (day + Math.floor(((modMonth + 1) * 26) / 10) + modYear + Math.floor(modYear / 4) + (6 * Math.floor(modYear/100)) + Math.floor(modYear/400)) % 7;

	return firstDay;
}



module.exports = {
	modifiedMonth: modifiedMonth,
	modifiedYear: modifiedYear,
	getDay: getDay
}


