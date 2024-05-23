#! /usr/bin/env node 
let welcome = "Welcome to My Bank";
console.log(welcome);
let Balance = 10000;
console.log("Balance is:", Balance);
let pin = 1234;
console.log("Pin =", pin);
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin:",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "fastCash", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (myBalance < amountAns.amount) {
            console.log("You don't have enough money in your account to cover your transactions.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fastCash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select Your Amount",
                type: "list",
                choices: ["20000", "10000", "5000", "1000"],
            },
        ]);
        let amount = fastCash.fastCash;
        if (myBalance < amount) {
            console.log("You don't have enough money in your account to cover your transactions.");
        }
        else {
            myBalance -= amount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Number");
}
