#! /usr/bin/env node 
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result if inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the world:"
    }
]);
const words = answers.Sentence.trim().split("");
//Print the array of words to the console 
console.log(words);
//Print the word count of the sentence to the console 
console.log(`Your Sentence word count is ${words.length}`);
