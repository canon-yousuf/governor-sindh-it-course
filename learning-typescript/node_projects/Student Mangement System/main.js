#! /usr/bin/env node 
// Import the inquirer module for creating interactive command line interfaces
import inquirer from "inquirer";
// Student class to represent individual student data
class Student {
    // Static counter to generate unique student IDs
    static counter = 10000;
    id; // Unique ID for each student
    name; // Name of the student
    courses; // List of courses the student is enrolled in
    balance; // Student's account balance for fees
    // Constructor to initialize a new student
    constructor(name) {
        this.id = Student.counter++; // Assign a unique ID and increment the counter
        this.name = name; // Set the student's name
        this.courses = []; // Initialize an empty list of courses
        this.balance = 1000; // Set the initial balance to 1000
    }
    // Method to enroll the student in a new course
    enroll_course(course) {
        this.courses.push(course); // Add the course to the student's list of courses
    }
    // Method to display the student's current balance
    view_balance() {
        console.log(`Balance of ${this.name} is ${this.balance}`);
    }
    // Method to pay fees and deduct the amount from the student's balance
    pay_fees(amount) {
        this.balance -= amount; // Deduct the specified amount from the balance
        console.log(`$${amount} Fees Paid Successfully by ${this.name}`);
    }
    // Method to display the student's status
    show_status() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }
}
// Student_Manager class to manage multiple students
class Student_Manager {
    students; // List of students
    // Constructor to initialize the student manager with an empty list of students
    constructor() {
        this.students = [];
    }
    // Method to add a new student
    add_student(name) {
        let student = new Student(name); // Create a new student instance
        this.students.push(student); // Add the new student to the list
        console.log(`Student: ${name} Added Successfully, Student ID: ${student.id}`);
    }
    // Method to enroll a student in a course
    enroll_student(student_id, course) {
        let student = this.find_student(student_id); // Find the student by ID
        if (student) {
            student.enroll_course(course); // Enroll the student in the course
            console.log(`${student.name} enrolled in ${course} Successfully`);
        }
    }
    // Method to view a student's balance
    view_student_balance(student_id) {
        let student = this.find_student(student_id); // Find the student by ID
        if (student) {
            student.view_balance(); // Display the student's balance
        }
        else {
            console.log("Student Not Found, Please Enter a correct Student Id");
        }
    }
    // Method to pay a student's fees
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id); // Find the student by ID
        if (student) {
            student.pay_fees(amount); // Pay the specified amount
        }
        else {
            console.log("Student Not Found, Please Enter a correct Student Id");
        }
    }
    // Method to show a student's status
    show_student_status(student_id) {
        let student = this.find_student(student_id); // Find the student by ID
        if (student) {
            student.show_status(); // Display the student's status
        }
    }
    // Helper method to find a student by ID
    find_student(student_id) {
        return this.students.find((std) => std.id === student_id); // Return the student if found
    }
}
// Main function to run the student management system
async function main() {
    console.log("Welcome to DEVSCHOL - Student Management System");
    console.log("-".repeat(50));
    let student_manager = new Student_Manager(); // Create a new instance of Student_Manager
    while (true) {
        // Prompt the user to select an option
        let Choice = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an Option",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit",
                ],
            },
        ]);
        // Perform actions based on the user's choice
        switch (Choice.choices) {
            case "Add Student":
                // Prompt the user to enter the student's name
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter a Student Name",
                    },
                ]);
                student_manager.add_student(name_input.name); // Add the new student
                break;
            case "Enroll Student":
                // Prompt the user to enter the student ID and course name
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a Course Name",
                    },
                ]);
                student_manager.enroll_student(course_input.student_id, course_input.course); // Enroll the student in the course
                break;
            case "View Student Balance":
                // Prompt the user to enter the student ID
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                ]);
                student_manager.view_student_balance(balance_input.student_id); // View the student's balance
                break;
            case "Pay Fees":
                // Prompt the user to enter the student ID and amount to pay
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay",
                    },
                ]);
                student_manager.pay_student_fees(fees_input.student_id, fees_input.amount); // Pay the student's fees
                break;
            case "Show Status":
                // Prompt the user to enter the student ID
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                ]);
                student_manager.show_student_status(status_input.student_id); // Show the student's status
                break;
            case "Exit":
                console.log("Exiting...");
                process.exit(); // Exit the application
        }
    }
}
// Call the main function to start the application
main();
