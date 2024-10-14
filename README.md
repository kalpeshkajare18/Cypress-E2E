# Cypress-E2E
Create a Repo in GitHub
Clone Repo in Local machine through CMD or git bash
You wil be required Node js to install cypress
Open Visual studio code Editor
Open your clone folder and go to Terminal
Enter command >> npm init
Continue this process it will add one package Json including your git repo
install Cypress >> npm install cypress --save-dev
Open Cypress >> npx open cypress
select End to End test
select chrome browser
select all config files and contineu
Select Specified example spec and contineu all data will be in your local folder now...
Start with POM
create folder tests under e2e module
Create Pages folder under cypress
In Pages directory create .js file for storing locators and action methods
In tests directory create .cy.js (cypress) file to create tests
Create json file under fixture for storing test data
Store URL in cypress.config.js by creating new object env
use import and export method to access weblocator and methods from pages directory and json file
move all data in git hub by using below commands
git fetch
git pull -- to pull latest data from repo
git status -- to check what are the new changes we made
git add .  -- to add all file in remote directory
git commit -m "anyComment" -- to commit changes
git push -- to push the code in remote directory...
