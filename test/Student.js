const User = require('./User');

class Student extends User {
	constructor(fname, lname, age) {
		super(fname, lname, age);
		this.className = null;
	}

	enroll(className) {
		if (this.isEnrolled()) {
			console.log('Sorry, the student is enrolled.');
		}
		this.className = className;
	}

	getFullName() {
		return `${this.fname} ${this.lname}`;
	}

	isEnrolled() {
		return this.className != null;
	}
}

module.exports = Student;
