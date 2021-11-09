const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template')

const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamArray = [];

// function to ask the manager their set of questions
const managerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team member's office number?",
        }, 
        {
            type: 'confirm',
            name: 'confirm',
            message: "Would you like to add a team member?",
            default: false
        }
    ]).then(function(data){
        let {name, id, email, office, confirm} = data;
        let manager = new Manager(name, id, email, office);

        teamArray.push(manager);

        if (confirm) {
            console.log('\n--------------------------------------\n')
            employeeQuestion();
        } else {
            console.log('Generatring Team Profile...');
            writeToFile('./dist/index.html', generatePage(data));
        }
    })
}

// function to ask if what role you want to give the newly added employee
const employeeQuestion = () => { 
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the team member's role?",
            choices: ['Engineer', 'Intern']
        },
    ]).then(function(data){
        let {role} = data;

        if (role === 'Engineer') {
            engineerQuestion();
        } else if (role === 'Intern') {
            internQuestion()
        }
    })
}

// function to ask if the user chooses engineer as the employee's role
const engineerQuestion = () => { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?",
        }, 
        {
            type: 'confirm',
            name: 'confirm',
            message: "Would you like to add a team member?",
            default: false
        }
    ]).then(function(data){
        let {name, id, email, github, confirm} = data;
        let employee = new Engineer(name, id, email, github);

        teamArray.push(employee);

        if (confirm) {
            console.log('\n--------------------------------------\n')
            employeeQuestion();
        } else {
            console.log('Generatring Team Profile...');
            writeToFile('./dist/index.html', generatePage(teamArray));
        }
    })
}

// function to ask if the user chooses intern as the employee's role
const internQuestion = () => { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        }, 
        {
            type: 'confirm',
            name: 'confirm',
            message: "Would you like to add a team member?",
            default: false
        }
    ]).then(function(data){
        let {name, id, email, school, confirm} = data;
        let employee = new Intern(name, id, email, school);

        teamArray.push(employee);

        if (confirm) {
            console.log('\n--------------------------------------\n')
            employeeQuestion();
        } else {
            console.log('Generatring Team Profile...');
            writeToFile('./dist/index.html', generatePage(teamArray));
        }
    })
}

// function to write the index.js file into the dist folder
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log(err);
        }
    })
}

managerQuestion();