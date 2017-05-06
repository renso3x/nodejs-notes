/*
By default, Mocha tests are described using BDD-flavored functions
called describe, it, before, after, beforeEach, and afterEach to define tests and set up logic.
Mocha’s “TDD” interface replaces the use of describe with suite; it with test; before with setup; and after with teardown. For our example we will stick with the default "BDD" interface.

As an alternative to the BDD interface’s describe, it, before, and others, Mocha supports more traditional TDD interfaces:

suite: analogous to describe
test: analogous to it
setup: analogous to before
teardown: analogous to after
suiteSetup: analogous to beforeEach
suiteTeardown: analogous to afterEach
*/
var sample = require('./sample');
var assert = require('assert');

var sum = (a, b) => {
	return a + b;
};

suite('String#split', function() {
	test('should return an array', function() {
		assert(Array.isArray('a,b,c'.split(',')));
	});

	test('should add this numbers', function() {
		assert(sum(5, 6), 11);
	});
});


before(function() { //once
	console.log('before');
});
after(function() {
	console.log('after');
})
describe('String#split', function() {

	beforeEach(function() { //before every test
	  console.log('before every test in every file');
	});

	it('should return an array', function() {
		assert(Array.isArray('a,b,c'.split(',')));
	});

	afterEach(function() {
		console.log('after each');
	})

});

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});

describe('Sum of all numbers', function() {
	it('should return 3', function() {
		assert(sum(1, 2), 3);
	})
});

describe('Display my name', function() {
	it('should diplay my name', function() {
		assert(sample('Romeo'), 'Romeo');
		assert(sample(2), 3);
	});
})
