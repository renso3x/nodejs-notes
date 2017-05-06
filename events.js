const events = require('events');
const util = require('util');
const Person = require('./Person');
const emitter = new events.EventEmitter();


//once fire only
// emitter.once('knock1', function() {
// 	console.log('Hi! Romeo');
// });
//
// emitter.on('knock', function() {
// 	console.log('WHo ???');
// });
//
// emitter.emit('knock1');
// emitter.emit('knock1');
// emitter.emit('knock');

// const Person = function Person(name) {
// 	this.name = name
// };

const romeo = new Person('romeo');

//attach and event emitter in our constructor object
util.inherits(Person, events.EventEmitter);

// create a listener for an emitting event
// attach a custom event
romeo.on('eventSample', function(msg) {
	console.log(romeo.name + 'said: ' + msg);
});

// emit an event
romeo.emit('eventSample', 'Hello World')
