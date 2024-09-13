#! /usr/bin/env node 
import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "INR": 0.297,
        "PKR": 1
    },
    "INR": {
        "USD": 0.012,
        "INR": 1,
        "PKR": 3.367
    },
    "USD": {
        "USD": 1,
        "INR": 83.3299,
        "PKR": 280.5736
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "INR", "USD"],
        message: "Select your Currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "INR", "USD"],
        message: "Select a Currency to Convert: "
    },
    {
        type: "number",
        name: "amount",
        choices: ["PKR", "INR", "USD"],
        message: "Enter Your Conversion Amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your Conversion Currency ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Inputs");
}
