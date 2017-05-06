class Person {
	constructor(fname, lname) {
		this.fname = fname;
		this.lname = lname;
	}

	get fullName() {
		return this.getName();
	}

	getName() {
		console.log(`${this.fname} ${this.lname}`);
	}

	what() {
		console.log(`${this.fname} ${this.lname} is a Person`);
	}

	static type() { // access this via Class
		return 'Person';
	}
}

class Student extends Person {
	constructor(school) {
		super();
		this.school = school
	}

	schooling() {
		console.log(`${this.school}`);
	}
}

const me = new Person('romeo', 'enso');
me.what();
console.log(Person.type());

const jon = new Student('BWS');
jon.fname = 'john';
jon.lname = 'doe'
jon.schooling();
jon.what();
