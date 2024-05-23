# DEVSCHOL - Student Management System

Welcome to DEVSCHOL, a command-line Student Management System designed to help manage student data efficiently. This system allows you to add students, enroll them in courses, view their balances, pay fees, and display their status.

## Features

- **Add Student**: Add a new student to the system with a unique ID.
- **Enroll Student**: Enroll a student in a specified course.
- **View Student Balance**: View the balance of a specified student.
- **Pay Fees**: Pay fees for a specified student and update their balance.
- **Show Status**: Display the current status of a specified student, including ID, name, enrolled courses, and balance.

## NPX Command 
 ```bash
npx canstudentmangementsystem

## Code Overview

### Student Class

This class represents individual student data.

**Properties**:

- `id`: Unique ID for each student.
- `name`: Name of the student.
- `courses`: List of courses the student is enrolled in.
- `balance`: Student's account balance for fees.

**Methods**:

- `enroll_course(course: string)`: Enrolls the student in a new course.
- `view_balance()`: Displays the student's current balance.
- `pay_fees(amount: number)`: Pays fees and deducts the amount from the student's balance.
- `show_status()`: Displays the student's status.

### Student_Manager Class

This class manages multiple students.

**Properties**:

- `students`: List of students.

**Methods**:

- `add_student(name: string)`: Adds a new student.
- `enroll_student(student_id: number, course: string)`: Enrolls a student in a course.
- `view_student_balance(student_id: number)`: Views a student's balance.
- `pay_student_fees(student_id: number, amount: number)`: Pays a student's fees.
- `show_student_status(student_id: number)`: Shows a student's status.
- `find_student(student_id: number)`: Helper method to find a student by ID.
