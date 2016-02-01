'use strict';


const zellars = require('../lib/zellars');
const { expect } = require('chai');
const cp = require('child_process');
const _ = require('lodash');

describe('calendar application', () => {
	describe('CLI', () => {
		xit('should be able to handle the current month', () => {
			// compare our cal app with the built in calendar app
			// execSync is a method on child process;
			const goal = cp.execSync('cal').toString();
			const output = cp.execSync('./lib/cal.js').toString();


			expect(output).to.equal(goal);
		});
	});

	describe('Zellar"s congruence', () => {
		describe('.modified_month', () => {
			it('return 13 for January', () => {
				const mod = zellars.modifiedMonth(2012, 1);

				expect(mod).to.equal(13)
			});

			// 2012, 2 === 14
			it('return 14 for February', () => {
				const mod = zellars.modifiedMonth(2012, 2);

				expect(mod).to.equal(14);
			});

			// 2012, 3 === 3
			it('return 3 for March', () => {
				const mod = zellars.modifiedMonth(2012, 3);

				expect(mod).to.equal(3);
			})

		});

		// write 3 more tests for .modifiedYear
		describe('.modifiedYear', () => {
			it('return 1999 for January 2000', () => {
				const mod = zellars.modifiedYear(2000, 1);

				expect(mod).to.equal(1999);
			});

			it('return 2011 for February, 2012', () => {
				const mod = zellars.modifiedYear(2012, 2);

				expect(mod).to.equal(2011);
			});

			it('return 2013 for March, 2013', () => {
				const mod = zellars.modifiedYear(2013, 3);

				expect(mod).to.equal(2013);
			});
		// 2000, 1 === 1999
		// 2012, 2 === 2011
		// 2013, 3 === 2013
		});



		// and more tests for .getDay
		describe('.getDay', () => {
			it('return 1 for March 2, 2014', () => {
				const mod = zellars.getDay(2014, 3, 2);

				expect(mod).to.equal(1);
			});

			it('return 1 for January 1, 2012', () => {
				const mod = zellars.getDay(2012, 1, 1);

				expect(mod).to.equal(1);
			});

			it('return 5 for January 12, 2012', () => {
				const mod = zellars.getDay(2012, 1, 12);

				expect(mod).to.equal(5);
			});

			it('return 6 for February 1, 1799', () => {
				const mod = zellars.getDay(1799, 2, 1);

				expect(mod).to.equal(6);
			});
		});

		describe('.displayHeader', () => {
			const { displayHeader } = require('../lib/month.js');

			it('should display month and year with proper prepended spacing', () => {

				expect(displayHeader(1, 2016)).to.equal('    January 2016\nSu Mo Tu We Th Fr Sa\n');
			});

			it('should display the month and year with proper spacing', () => {

			 	expect(displayHeader(5, 2016)).to.equal('      May 2016\nSu Mo Tu We Th Fr Sa\n');
			});

			it('should display the month and year with proper spacing', () => {

			 	expect(displayHeader(8, 2016)).to.equal('    August 2016\nSu Mo Tu We Th Fr Sa\n');
			});

			it('should display the month and year with proper spacing', () => {

			 	expect(displayHeader(6, 2016)).to.equal('     June 2016\nSu Mo Tu We Th Fr Sa\n');
			});

			it('should display the month and year with proper spacing', () => {

			 	expect(displayHeader(9, 2016)).to.equal('   September 2016\nSu Mo Tu We Th Fr Sa\n');
			});

			it('should display the month and year with proper spacing', () => {

			 	expect(displayHeader(9, 700)).to.equal('   September 700\nSu Mo Tu We Th Fr Sa\n');
			});
		});


		describe('.getMonthDays and .showDays', () => {
			const { getMonthDays } = require('../lib/month.js');
			const { showDays } = require('../lib/month.js');

			it('should show the proper number of days for the given month', () => {
				//let arr = [1, 2, 3];
				expect(getMonthDays(1, 2016)).to.equal(31);
			});

			it('should display the range number of days for the given month', () => {
				let arr = _.range(1, 32);
				let res =  showDays(1, 2016)
				expect(res).to.eql(arr);
			});
		});


		// describe('.getFirstDay', (year, month, day) => {
		// 	const { getDay } = require('../lib/zellars.js');
		// 	const { getFirstDay } = require('../lib/month.js');

		// 	it('should use zellars to figure out what day of the week the date given falls on', () => {
		// 		// call zellars getDay method and assign the result to a variable
		// 		let wutDay = getDay(2016, 1, 29);
		// 		let actual = 6;
		// 		expect(actual).to.equal(wutday)
		// 	})
		// })


	});
});































