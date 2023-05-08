# E-commerce-Back-End

Week-13 Challenge (Object-Relational-Mapping)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

This application uses Sequelize to interact with a MySQL database...

This application was created so that business owners can view and manage the departments, roles, and employees within their company helping streamline planning and organization. The database used for this application was created with MySQL. It implements the sequelize dependency allowing for the database to be interacted with through the use of JavaScript. Although the complex file structuring and initial set up connecting tables and seeing the database made for more work than strictly seeding the database with a seeds.sql file, it did eliminate the need for long, confusing, intensive query statements.

Notable skills I gained and continued to cultivate while working on the application were how one would go about seeding a database strictly using MySQL, and with sequelize. Joining tables and re-creating new objects by use of the .map() function to gather desired displays of data. I also furthered my knowledge of the inquirer dependency, and accessing specific data within objects by use of dot notation.

Future development for this application along with the addition of unit testing would consist of creating functionality allowing the user to update employee managers, view employees by manager, view employees by department, being able to delete departments, roles, and employees from the database, and allowing the view of the total utilized budget of a department—in other words, the combined salaries of all employees in that department. I also think it would be interesting to create some animation within the terminal, making the application more polished.

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1Hr170LZXgJh4grGi1paxnOqgmCtWljbp/view

## Screenshots

![Screenshot1-week-13-challenge](https://user-images.githubusercontent.com/120127903/236879169-17b9f26e-a3c4-47fe-8088-f3971efe2349.png)

![Screenshot2-week-13-challenge](https://user-images.githubusercontent.com/120127903/236879182-e938d80e-5931-4389-85ee-214c6ce627bd.png)

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.17.1), JavaScript, MySQL, and Sequelize (ORM). It utilizes the node package manager (npm) dependencies sequelize (v5.22.5), mysql2 (v2.3.3), express (v4.17.1), dotenv (8.6.0v), and nodemon (v2.0.3). Also, the Insomnia application was utilized to test the functionality of routes within the program.

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/E-Commerce-Back-End.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:

   - Command for sequelize will be npm i sequelize
   - Command for mysql2 will be npm i mysql2
   - Command for express will be npm i express@4.17.1
   - Command for dotenv will be npm i dotenv
   - Command for nodemon will be npm i nodemon

6. If you do not have a MySQL account, you will need to create one (see https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

7. Once all dependencies are installed, you will need to create the database. To do this you will need to navigate to the directory db directory containing the schema.sql file. Once there, you will need to open up a MySQL shell using the command mysql -u root -p, where you will then be prompted to enter you password. Once your password is entered you will be in the MySQL shell.

8. Once in the MySQL shell you will then run the command source schema.sql. This will create the database.

9. Once the database has been created, you will then need to seed the database (this will also create the model structure for the tables within the database). To do this, navigate to the root directory and run the command npm run seed. This needs to be done from the root directory because the .env file lives within the root.

10. Once the database has been seeded, you will then be able to run the command npm start from the root directory to spin up the server.

11. From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program.

## Credits

Much of this application followed outline code found within the week 13 class activities. I worked with a tutor (Andrew Hardemon) who helped me finalize the POST and PUT routes within the product routes file. And I also worked closely with one a good friend, Brian Dillmann, who works in software development on my overall understanding of backend development.

## Features

Features of this application include the users ability to manage the backend of their company's e-commerce website through Express routing. The functionality built within the application allows for users to navigate their company's database with GET routes, add and update new catagories, products, and tags to their website with POST and PUT routes, and delete any catagories, products, and tags no longer in use or that may be currently out of stock with DELETE routes.

## Usage Information

Usage of this application...

Usage of this application is very intuitive, once the application is started (see installation section for instructions on how to get the application set up and running), the user will then be prompted to select from various choices allowing them to either VIEW a Department, Role, or Employee table, ADD a Department, Role, or Employee to the database, or to UPDATE a particular Employee's Role. If the user chooses to ADD or UPDATE the database, their choice will then be reflected when the user then VIEWS the particular table that was UPDATED.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>
