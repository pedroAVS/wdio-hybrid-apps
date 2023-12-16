# Automated Tests

This project contains automated tests for a mobile application. The tests are written in TypeScript and use WebDriverIO and Mocha.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- Appium
- An Android emulator or real device

### Installing

1. Clone the repository:

`git clone https://github.com/yourusername/automated-tests.git`

2. Navigate to the project directory:

`npm install`


## Running the tests

To run the tests, use the following command:

`npm test`


This will start the Appium server and run the tests on the specified Android device.

## Test Structure

The tests are organized into page objects, which are located in the `pageobjects` directory. Each page object represents a screen in the mobile application and contains methods for interacting with that screen.

The test cases are located in the `test` directory. Each test case imports the necessary page objects and uses their methods to perform actions and assertions.

## Built With

- [WebDriverIO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Appium](http://appium.io/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details