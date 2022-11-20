const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description explaining the what, why, and how of your project.",
    // What was your motivation?
    // Why did you build this project?
    // What problem does it solve?
    // What did you learn?
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "list",
    choices: ["MIT", "Apache", "BSD"],
    message: "Please select a license",
    name: "license",
  },
  {
    //   How do I give the user the option to skip over this question?
    type: "input",
    message:
      "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
    name: "contribution",
  },
  {
    //   How do I give the user the option to skip over this question?
    type: "input",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    // How to add a link to GitHub profile?
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email.",
    name: "email",
  },
  {
    type: "input",
    message: "Provide a short description of how you can be reached.",
    name: "contact",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("success");
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    const fileData = generateMarkdown(response);
    writeToFile("README.md", fileData);
  });
}

init();
