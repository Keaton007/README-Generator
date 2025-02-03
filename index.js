// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a shor discription of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions for installations people should know about?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) =>generateMarkdown(answers))
    .then((readmeContent) => writeToFile('README.md', readmeContent))
    .then(() => console.log('Successfully wrote the README.md file'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
