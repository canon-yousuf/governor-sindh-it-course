//University Mangement System
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    }
};

class Student extends Person{
    rollNumber: string;
    courses: Course[] = [];
    constructor(name: string, age: number, rollNumber: string){
        super(name, age)
        this.rollNumber = rollNumber
    }
    registerForCourses(course: Course) {
        this.courses.push(course);
    }
};

class Instructor extends Person{
    salary: number;
    courses: Course[] = [];
    constructor(name: string, age: number, salary: number){
        super(name, age)
        this.salary = salary
    }
    asignCourse(course: Course) {
        this.courses.push(course);
    }
};

const std1 = new Student("Canon", 18, "1234");
const std2 = new Student("Yashwa", 18, "4321");

const instructor1 = new Instructor("Sir Zia", 50, 1000000);
const instructor2 = new Instructor("Sir Humzah", 22, 100000);

class Course {
    id: number;
    name: string;
    students: Student[] = []
    instructor: Instructor[] = []

    constructor(id: number, name: string){
       this.id = id;
       this.name = name
    }

    addStudent(std: Student) {
        this.students.push(std)
    }

    setInstructor(instructor: Instructor){
       this.instructor.push(instructor)
    }
};

class Department {
    name: string;
    courses: Course[]= [];
    constructor(name: string) {
        this.name = name;
    }
    addCourse(course: Course){
        this.courses.push(course)
    }
}



const course1 = new Course(1, "BlockChain");
const course2 = new Course(1, "MetaVerse");

course1.addStudent(std1)
course1.addStudent(std2)
course2.addStudent(std1)
course1.setInstructor(instructor1);
course2.setInstructor(instructor2)
console.log(course1.students);

const d1 = new Department("Computer Science");

d1.addCourse(course1)

console.log(d1.courses)


