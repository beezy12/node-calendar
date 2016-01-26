'use strict';

const { expect } = require('chai');
const cp = require('child_process');

describe('calenar application', () => {
	it('should be able to handle the current month', () => {
		// compare our cal app with the built in calendar app
		// execSync is a method on child process;
		const goal = cp.execSync('cal').toString();
		const output = cp.execSync('./cal.js').toString();


		expect(output).to.equal(goal);
	});
});
