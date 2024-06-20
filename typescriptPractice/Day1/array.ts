// Introduction to Arrays

// Create, initialize, and access array elements.
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1

// Array Methods

// Practice using array methods such as push, pop, shift, unshift, splice, slice, map, filter, and reduce.

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

const filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers); // Output: [4, 5, 6]

// Exercises

// Create an array of tasks.
let tasks: string[] = ["Coding", "Exercise", "8hr Sleep"];

// Add new tasks to the array.
tasks.push("Healthy Diet");
console.log(tasks); // Output: ["Coding", "Exercise", "8hr Sleep", "Healthy Diet"]

// Remove tasks from the array.
tasks.pop();
console.log(tasks); // Output: ["Coding", "Exercise", "8hr Sleep"]

// Filter tasks based on a condition.
const importantTasks = tasks.filter(task => task.includes("Exercise") || task.includes("Coding"));
console.log(importantTasks); // Output: ["Coding", "Exercise"]

// Additional Task Manipulation Examples

// Add multiple tasks at once
tasks.push("Reading", "Meditation");
console.log(tasks); // Output: ["Coding", "Exercise", "8hr Sleep", "Reading", "Meditation"]

// Remove the first task
tasks.shift();
console.log(tasks); // Output: ["Exercise", "8hr Sleep", "Reading", "Meditation"]

// Insert a task at the beginning
tasks.unshift("Morning Walk");
console.log(tasks); // Output: ["Morning Walk", "Exercise", "8hr Sleep", "Reading", "Meditation"]

// Replace a task
tasks.splice(2, 1, "Power Nap");
console.log(tasks); // Output: ["Morning Walk", "Exercise", "Power Nap", "Reading", "Meditation"]

// Create a subarray of tasks
const selectedTasks = tasks.slice(1, 4);
console.log(selectedTasks); // Output: ["Exercise", "Power Nap", "Reading"]

// Map tasks to a new array with descriptions
const detailedTasks = tasks.map(task => `Task: ${task}`);
console.log(detailedTasks); // Output: ["Task: Morning Walk", "Task: Exercise", "Task: Power Nap", "Task: Reading", "Task: Meditation"]

// Reduce tasks into a single string
const allTasks = tasks.reduce((acc, task) => `${acc}, ${task}`);
console.log(allTasks); // Output: "Morning Walk, Exercise, Power Nap, Reading, Meditation"
