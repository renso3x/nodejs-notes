// TODO: CREATE A CLASS FOR USER REGISTERATION
// CHECK IF USER EXIST
// CHECK IF USER AGE IS BELOW 18 CANNOT REGISTER.
// PROTOTYPING THE CLASS USER
// CREATE AN INSTANCE OF USER WITH TYPES OF TEACHER, STUDENT
// ASSOCIATE A STUDENT WITH A GRADE LEVEL MAX PAX FOR LEVEL IS 5.
// ASSOCIATE A GRADE LEVEL WITH A ADVISER TEACHER 1 teacher = 1 grade LEVEL

const Class = require('./Class');
const Student = require('./Student');
const Teacher = require('./Teacher');

const grade1 = new Class('Grade 1');
const TeacherJohn = new Teacher('Jon', 'Travis', 32, 'Male');

const romeo = new Student('Romeo', 'Enso', 23);
const raymund = new Student('Raymund', 'Enso', 23);
const richard = new Student('Richard', 'Enso', 23);
const john = new Student('John', 'Doe', 15);
const tampi = new Student('Tamina', 'Zucher', 23);
const pau = new Student('Paula', 'Unich', 14);
const mark = new Student('Mark', 'Toner', 18);
const toni = new Student('Toni', 'Stark', 18);

grade1.addStudent(romeo);
TeacherJohn.setMyClass(grade1.name);
grade1.setTeacher(TeacherJohn);
grade1.addStudent(romeo);
grade1.addStudent(raymund);
grade1.addStudent(richard);
grade1.addStudent(john);
grade1.addStudent(tampi);
grade1.addStudent(pau);
grade1.addStudent(mark);
grade1.addStudent(toni);

const grade1Students = grade1.students.map(student => `${student.lname}, ${student.fname}`)
console.log(grade1Students);
