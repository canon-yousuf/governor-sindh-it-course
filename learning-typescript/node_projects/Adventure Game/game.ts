import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }
}

const player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Please Enter Your Name:",
  },
]);

const opponent = await inquirer.prompt([
 {
    name: "select",
    type: "list",
    message: "Select Your Opponent:",
    choices: ["Skeleton", "Alien", "Zombie"],
  },
]);

