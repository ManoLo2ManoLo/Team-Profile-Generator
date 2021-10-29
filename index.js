const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template')

let employeeCounter = 1;
let teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'ID',
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
        name: 'email',
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
        name: 'github',
        message: "What is the team member's Github username?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter a Github username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log('Please enter an office number!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'employee',
        message: "Do you have additional members on your team?",
        choices: ['Yes', 'No']
    }
]

const teamQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team member's name?",
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
        type: 'list',
        name: 'role',
        message: "What is the team member's Role?",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the team member's ID number?",
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
        name: 'email',
        message: "What is the team member's email?",
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
        name: 'github',
        message: "What is the team member's Github username?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter a Github username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the team member's office number?",
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log('Please enter an office number!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'employee',
        message: "Do you have additional members on your team?",
        choices: ['Yes', 'No']
    }
]

function writeToManager(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log(err);
        }
    })
}

function writeToTeam(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log(err);
        }
    })
}

function askManager() {
    console.log('Team Manager:')
    inquirer.prompt(managerQuestions).then(function(managerData) {
        teamArray.push(managerData)
        if (managerData.employee === 'Yes')   {
            console.log(`Employee Number ${employeeCounter}:`)

            inquirer.prompt(teamQuestions).then(function(teamData) {
                addTeam(teamData);
            });
        } else {
            writeToManager('./dist/index.html', generatePage(teamArray))
        }
    })
}

function addTeam(data) {
    employeeCounter++;
    teamArray.push(data);

    if (data.employee === 'Yes') {
        console.log(`Employee Number ${employeeCounter}:`)

        inquirer.prompt(teamQuestions).then(function(teamData) {
            addTeam(teamData);
        });
    } else {
        writeToTeam('./dist/index.html', generatePage(teamArray));
    }
}

askManager(); 