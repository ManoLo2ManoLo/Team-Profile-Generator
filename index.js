const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template')

const questions = [
    {
        type: 'input',
        name: 'mName',
        message: "What is the team manager's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mID',
        message: "What is the team manager's ID number?",
        validate: ID => {
            if (ID) {
                return true;
            } else {
                console.log('Please enter an ID number!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mEmail',
        message: "What is the team manager's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mOffice',
        message: "What is the team manager's office number?",
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log('Please enter an office number!')
                return false;
            }
        }
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log(err);
        }

        console.log('Generating Team Profile...')
    })
}

function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile('./dist/index.html', generatePage(data))
    })
}

init(); 