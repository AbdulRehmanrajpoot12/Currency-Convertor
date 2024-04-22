import inquirer from "inquirer";
import chalk from "chalk";
let Convertion = {
    "PKR": {
        "USD": 0.0036,
        "EUR": 0.0034,
        "GBP": 0.0029,
        "PKR": 1
    },
    "USD": {
        "PKR": 278.55,
        "EUR": 0.94,
        "GBP": 0.81,
        "USD": 1
    },
    "EUR": {
        "USD": 1.07,
        "PKR": 296.77,
        "GBP": 0.86,
        "EUR": 1
    },
    "GBP": {
        "USD": 1.24,
        "EUR": 1.16,
        "PKR": 344.06,
        "GBP": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EUR", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EUR", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter convertion amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(chalk.green.bold(`Your convertion from ${from} to ${to} is: ${result}`));
}
else {
    console.log(chalk.yellow.bold("Invalid input"));
}
