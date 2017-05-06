const User = require('./User');

class Teacher extends User {
	constructor(fname, lname, age, gender) {
		super(fname, lname, age, gender);
		this.setClass = null;
	}

	setMyClass(myClass) {
		return this.setClass = myClass;
	}
}

module.exports = Teacher;
