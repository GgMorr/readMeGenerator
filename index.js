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
        type: 'input',
        name: 'installation',
        message: 'How to install your project? (Required)',
        validate: (value) => {
            if (value) {
                {return true}
             } else {return 'Please explain how to install your project!'}},
      },

      {
        type: 'input',
        name: 'use',
        message: 'How to use your project?',
        validate: (value) => {
            if (value) {
                {return true}
             } else {return 'Please explain how to use your project!'}},
      },

      {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to your project?'
      },

      {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub user name?'
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (value) {
                {return true}
             } else {return 'Please enter your email address!'}},
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
        type: 'list',
        name: 'license',
        message: 'Select your choice of license:',
        choices: ['MIT license', 'Apache license', 'GPL license', 'Other'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {console.log('Please provide your license provider!');
                return false;
            }
        }
      }
  ])
  
 
.then(({title, description, installation, use, contribution, user, email, about}) => {
    const template = `# ${title}
* [Description](#description)
* [Installation](#installation)
* [Use](#use)
* [Contribution](#contribution)
* [GitHub User Name](#user)
* [About](#about)
* [Email] (#email)\n

#Table of Contents
## DESCRIPTION
${description}\n
## INSTALLATION
${installation}\n
## USE
${use}\n
## CONTRIBUTION
${contribution}\n
## GitHub User Name
${user}\n
## ABOUT
${about}\n
## CONTACT
* Email: ${email}`;

    createNewFile(title,template);
    } 
);

    function createNewFile(README,data) {
        //fs.writeFile(`./${README.toLowerCase().split('').join('')}.md`,data,(err)=> {
        fs.writeFile("README.md",data,(err)=> {    
        if(err){
                console.log(err)
            }
            console.log('Congratulations! Your ReadMe has been generator')
        })

}


