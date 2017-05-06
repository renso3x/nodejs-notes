class User {
	constructor(fname, lname, age, gender) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
		this.gender = gender;
	}

	fullName() {
		return `${this.fname} ${lname}`;
	}

	age() {
		return this.age;
	}

	isBelowEighteen() {
		return this.age < 18;
	}
}

module.exports = User;
