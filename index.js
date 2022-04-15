// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project's description. (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "authors",
    message: "Enter the author's names. (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the name of the users!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username. (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your project? (Optional)",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage content. (Optional)",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use for your project? (Optional)",
    choices: [
      "EPL-2.0",
      "CDDL-1.0",
      "MPL-2.0",
      "MIT",
      "lgpl-license",
      "gpl-license",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "Apache-2.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contributing section. (Optional)",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter tests to run. (Optional)",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const init = (questions) => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
};

init(questions);
