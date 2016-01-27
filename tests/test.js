'use strict';


const zellars = require('../lib/zellars');
const { expect } = require('chai');
const cp = require('child_process');

describe('calendar application', () => {
	describe('CLI', () => {
		it('should be able to handle the current month', () => {
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



		// and more tests for .calculate
		describe('.calculate', () => {
			it('return 1 for March 2, 2014', () => {
				const mod = zellars.calculate(2014, 3, 2);

				expect(mod).to.equal(1);
			});

			it('return 1 for January 1, 2012', () => {
				const mod = zellars.calculate(2012, 1, 1);

				expect(mod).to.equal(1);
			});

			it('return 5 for January 12, 2012', () => {
				const mod = zellars.calculate(2012, 1, 12);

				expect(mod).to.equal(5);
			});

			it('return 6 for February 1, 1799', () => {
				const mod = zellars.calculate(1799, 2, 1);

				expect(mod).to.equal(6);
			});
		});


		// describe('write a function that centers month', () => {
		// 	const center = require('../lib/center');
		// 	it('should handle January', () => {
		// 		expect(center('January 2016')).to equal('    January 2016');
		// 	});
		// 	it('should handle February', () => {
		// 		expect(center('February 2016')).to equal('   February 2016');
		// 	});
		// });

	});
});



// build a module called zellars   (zellars.modifiedMonth comes from that)
// require it:
// const zellars = require('../zellars.js');

// GOAL FOR TODAY:
// minimum goal is to write a zellars module that will pass these 10 tests. It will have 3 functions.

// LONG TERM GOAL:
// output current month in the terminal







