class Class {
	constructor(name) {
		this.name = name;
		this.students = [];
		this.teacher = null;
	}

	addStudent(student) {
		if (this.isFull()) {
			return console.log('Sorry, the class is full');
		}

		if (student.age < 18) {
			return console.log(`${student.fname} ${student.lname} is below 18`);
		}
		this.students.push(student);
	}

	isFull() {
		return this.students.length > 5;
	}

	removeStudent(student) {
		return this.student.filter(v => student != student);
	}

	setTeacher(teacher) {
		if (this.hasTeacher()) {
			console.log(`Sorry, this class has now a Teacher ${this.teacher}`);
		}
		this.teacher = teacher;
	}

	hasTeacher() {
		return this.teacher != null;
	}
}

module.exports = Class;
