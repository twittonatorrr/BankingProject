# banking-project-cypress

This pet-project aims to cover all test-cases which you can view in this file description below. To create this pet project, I used this [website](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) which is designed for practise automation.

For the implementation of these tests, I used [Cypress](https://www.cypress.io/) testing framework.

## UI Test Cases

-   ✅ Test Case 1: Login bank as customer
-   ✅ Test Case 2: Login bank as manager
-   ✅ Test Case 3: User log out as customer
-   ✅ Test Case 4: Go to Home Page as customer
-   ✅ Test Case 5: Go to Home Page as manager
-   ✅ Test Case 6: Check Transactions page
-   ✅ Test Case 7: User make a deposit
-   ✅ Test Case 8: User make a withdraw
-   ✅ Test Case 9: User make a withdraw with no value on balance
-   ✅ Test Case 10: User made a transaction and searching it in Transactions page
-   ✅ Test Case 11: User reset all transactions
-   ✅ Test Case 12: User check pound balance
-   ✅ Test Case 13: Manager add new customer
-   ✅ Test Case 14: Open account for new customer
-   ✅ Test Case 15: Delete customer


## Requirments

For running tests in this project, you have to install Cypress. For installing Cypress, switch(cd) to the project's root folder and run:

    npm install

## Start tests running

If you want to see all process of test running, you can use this command which open Cypress GUI,when you can choose specifis test to run:

    npx cypress open

Or if running from the CLI use this one:

    npx cypress run --spec "cypress/integration/*.cy.js"

## Features

 - UI functional tests(mocked & stubbed)
 - End- to- end tests
 - Visual tests

## Tools

 - Cypress
 - Chai
 - Mocha
 - Prettier