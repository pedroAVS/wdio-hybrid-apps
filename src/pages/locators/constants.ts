// Purpose: Constants for locators
export const HOME_PAGE_ELEMENTS = {
    denyLocalizationButton: {
        android: {
            locator: 'new UiSelector().text("Skip").className("android.widget.TextView")',
            strategy: 'UIAutomator2',
        },
        ios: {
            locator: "type == 'XCUIElementTypeButton' && name CONTAINS 'Don’t Allow'",
            strategy: 'IOSPredicateString',
        },
    },
    headerSettingsButton: {
        web: {
            locator: "[qa-label='HeaderSettingsIcon']"
        },
    },
    loginSignupButton: {
        webMobile: {
            locator: "[qa-label='LoginSignUpSettingsBtn']"
        },
        web: {
            locator: "[data-qa-label='LoginSignUpSettingsBtn']"
        },
    },
    registeredGreetingText: {
        webMobile: {
            locator: ".welcome-name"
        },
        web: {
            locator: "[data-qa-label='UserNameLbl']"
        },
    },
};

export const LOGIN_PAGE_ELEMENTS = {
    loginButton: {
        webMobile: {
            locator: "[qa-label='LoginContinueBtn']"
        },
        web: {
            locator: "[data-qa-label='SignInBtn']"
        },
    },
    loginEmailButton: {
        web: {
            locator: "[data-qa-label='LogInLnk']"
        },
    },
    usernameField: {
        webMobile: {
            locator: "[data-qa-label='BKGbSignInEmailTxt']"
        },
        web: {
            locator: "[data-qa-label='SignInEmailTxt']"
        },
    },
    passwordField: {
        webMobile: {
            locator: "[data-qa-label='BKGbSignInPasswordTxt']"
        },
        web: {
            locator: "[data-qa-label='SignInPasswordTxt']"
        },
    },
    passwordVisibleField: {
        webMobile: {
            locator: ".password-visible"
        },
        web: {
            locator: "[data-test-id='LoginPasswordVisibleText']"
        },
    },
    errorPopup: {
        webMobile: {
            locator: "[qa-label='InvalidUsernamePasswordLbl']"
        },
        web: {
            locator: ".error-popup__header"
        },
    },
    errorPopupCloseButton: {
        webMobile: {
            locator: "[data-qa-label='InvalidUsernamePasswordTryAgainLnk']"
        },
        web: {
            locator: "[data-qa-label='ErrPopupOkBtn']"
        },
    },
    showPasswordButton: {
        webMobile: {
            locator: "[data-qa-label='ShowHideLnk']"
        },
        web: {
            locator: ".toggle-password-visibility"
        },
    },
};

export const LOCATION_PAGE_ELEMENTS = {
    denyLocalizationButton: {
        android: {
            locator: 'new UiSelector().text("Skip").className("android.widget.TextView")',
            strategy: 'UIAutomator2',
        },
        ios: {
            locator: "type == 'XCUIElementTypeButton' && name CONTAINS 'Don’t Allow'",
            strategy: 'IOSPredicateString',
        },
        web: {
            locator: "[qa-label='LocationServicesOffBtn']"
        },
    }
}

export const CREATE_ACCOUNT_PAGE_ELEMENTS = {
    firstNameInput: {
        webMobile: {
            locator: "[qa-label='FirstNameTxt']"
        },
        web: {
            locator: "[data-qa-label='FirstNameTxt']"
        },
    },
    lastNameInput: {
        webMobile: {
            locator: "[qa-label='LastNameTxt']"
        },
        web: {
            locator: "[data-qa-label='LastNameTxt']"
        },
    },
    emailInput: {
        webMobile: {
            locator: "[qa-label='EmailTxt']"
        },
        web: {
            locator: "[data-qa-label='EmailTxt']"
        },
    },
    passwordInput: {
        webMobile: {
            locator: "[qa-label='PasswordTxt']"
        },
        web: {
            locator: "[data-qa-label='PasswordTxt']"
        },
    },
    confirmPasswordInput: {
        webMobile: {
            locator: "[qa-label='ConfirmPasswordTxt']"
        },
        web: {
            locator: "[data-qa-label='ConfirmPasswordTxt']"
        },
    },
    createAccountButton: {
        webMobile: {
            locator: "[qa-label='CreateAccountBtn']"
        },
        web: {
            locator: "[data-qa-label='CreateAccountBtn']"
        },
    },
    createAccountErrorText: {
        webMobile: {
            locator: "[qa-label='CreateAccountErrorLbl']"
        },
        web: {
            locator: "[data-qa-label='CreateAccountErrorLbl']"
        },
    },
};

export const LOCATORS = {
    ...HOME_PAGE_ELEMENTS,
    ...LOGIN_PAGE_ELEMENTS,
    ...LOCATION_PAGE_ELEMENTS,
    ...CREATE_ACCOUNT_PAGE_ELEMENTS
};

export const LOGIN_DATA = {
    username: 'pavstests@gmail.com',
    password: 'Test123'
};

export const ASSERTIONS = {
    signupError: ['Invalid email or password', 'Invalid email and/or password'],
};

export const TEST_DATA = {
    ...LOGIN_DATA,
    signupError: driver.isAndroid || driver.isIOS ? ASSERTIONS.signupError[1] : ASSERTIONS.signupError[0],
};