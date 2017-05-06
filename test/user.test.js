const assert = require('chai').assert;
const Student = require('./Student');


describe('Making a Student', function() {
	let romeo = null;

	beforeEach(function() {
		romeo = new Student('Romeo', 'Enso');
	});
	describe('Register a student', function() {

		it('Get the fullname', function() {
			assert.strictEqual(romeo.getFullName(), 'Romeo Enso', 'generated a student');
		});

		it('Check if not equal', function() {
			assert.strictEqual(romeo.fname, 'John', 'the firstname is not equal');
		});
	});
});
