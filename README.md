# cypress-agibank
Test Agibank Teste

## Technical Choices
I decided to use Cypress due to its well-suited for end-to-end testing of web applications. It can simulate user interactions across multiple pages and test the application's behavior as a whole.

The tests scripts was created based in a architeture by modules and using pageobjects to maintain the specific components of the funcionality and their actions
- [blobPage.cy.js] Tests related to the Blob Web Page - Search functionality

Pageobjects were created in `support/page_objects` folder

- [blobPage.js] Scripts related to Page Objets to identifying elements and create functions for the specific page Blob Web Page

## Fixtures
Fixtures were created in `cypress/fixtures` folder
- [testData.json] Data Test related to Positive Scenarios
- [testDataNegative.json] Data Test related to Negative Scenarios

## Setup Instructions
## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.44.0.windows.1`)
- [Node.js](https://nodejs.org/en/) (I've used version `v20.12.2`)
- npm (I've used version `10.5.0`)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## devDependencies
- [@cypress] `13.8.1`

## Configuring the environment variables

- [cypress.config.js] configuration of defaultCommandTimeout, requestTimeout, responseTimeout, retries, baseUrl, plugins

## Running the tests

In this project, you can run tests in interactive and headless modes

### Headless mode

Run `npm run tests-search` to run individually cypress search tests in headless mode.
Run `npm run cy:open` to run cypress in interactive mode.

### Test Retries

The automatic retry mechanism for failed tests were configured in the `cypress.config.js` with a predefined number of retry attempts before marking a test as failed (runMode: 2, openMode: 2). During the test execution, it was noticed that some tests were successfully executed on the third attempt.