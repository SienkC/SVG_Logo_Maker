// require all necessary
const inquirer = require('inquirer');
const logoCreator = require('./lib/logoCreator');

// Prompt for user input
function init() {
    // Ask user questions in terminal
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the text for your logo',
            name: 'text',
            // check if text is correct length (3 max)
            validate(value) {
                if(value.length <= 3) {
                    return true;
                }
                else {
                    return 'Please enter 3 characters max.';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter the color of your text',
            default: 'orange',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Select the shape you wish to use',
            choices: ['Square', 'Circle', 'Triangle'],
            default: 'Square',
            name: 'shape'
        },
        {
            type: 'input',
            message: 'Enter the color of your shape',
            default: 'black',
            name: 'shapeColor'
        }
    ])
    .then((response) => {
        // function to create logo
        logoCreator.generateLogo(response);
    });
}


// Function call to initialize app
init();



