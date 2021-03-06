const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)', // Require input
      validate: (value) => {
          if (value) {
              {return true}
           } else {return 'Please enter your project title!'}},
             
    },

    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project? (Required)',
        validate: (value) => {
            if (value) {
                {return true}
             } else {return 'Please enter a project description!'}},
      },

      {
        type: 'list',
        name: 'license',
        message: 'Select your choice of license:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3'],  
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {console.log('Please provide your license provider!');
                return false;
            }
        }
      },

      {
        type: 'input',
        name: 'installation',
        message: 'How to install your application? (Required)',
        validate: (value) => {
            if (value) {
                {return true}
             } else {return 'Please explain how to install your application!'}},
      },

      {
        type: 'input',
        name: 'usage',
        message: 'How to use your application?',
        validate: (value) => {
            if (value) {
                {return true}
             } else {return 'Please explain how to use your application!'}},
      },

      {
        type: 'input',
        name: 'contributers',
        message: 'How can others contribute to your project?'
      },

      {
        type: 'input',
        name: 'testing',
        message: 'How do you test your application?'
      },

      {
        type: 'input',
        name: 'questions',
        message: 'Enter your GitHub user name?'
      },


      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },

      {
        type: 'input',
        name: 'about',
        message: 'Tell us about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
        }
      },

        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
          validate: (value) => {
              if (value) {
                  {return true}
               } else {return 'Please enter your email address!'}},
        }
     
  ])
  

.then(({title, description, installation, usage, license, badge, contributers, testing, questions, email, about}) => {

  switch (license) {
    case "MIT": 
          badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case "Apache 2.0": 
          badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case "GPLv3": 
          badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
  };

    const template = `# ${title}

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributers](#contributers)
* [Testing](#testing)
* [Questions](#questions)
* [About](#about)
* [Email](#email)\n
 

## DESCRIPTION
${description}\n
## LICENSE
This project is licensed under ${badge}\n
## INSTALLATION
${installation}\n
## USAGE
${usage}\n
## CONTRIBUTERS
${contributers}\n
## TESTING
The following actions are required to run the test: ${testing}\n
## QUESTIONS
For questions about this application, please email at https://github.com/${questions}\n
## ABOUT
${about}\n
### EMAIL
${email}`;


    createNewFile(title,template);
    } 
);



    function createNewFile(README,data) {
        //fs.writeFile(`./${README.toLowerCase().split('').join('')}.md`,data,(err)=> {
        fs.writeFile("README.md",data,(err)=> {    
        if(err){
                console.log(err)
            }
            console.log('Congratulations! Your ReadMe has been generated')
        })

}


