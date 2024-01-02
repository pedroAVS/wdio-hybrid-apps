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
            locator: "//*[@qa-label='HeaderSettingsIcon']",
            strategy: 'XPath',
        },
    },
    loginSignupButton: {
        web: {
            locator: "//*[@qa-label='LoginSignUpSettingsBtn']",
            strategy: 'XPath',
        },
    },
    registeredGreetingText: {
        webMobile: {
            locator: ".welcome-name",
            strategy: 'CSS',
        },
        web: {
            locator: "[data-qa-label='UserNameLbl']"
        },
    },
};

export const LOGIN_PAGE_ELEMENTS = {
    loginButton: {
        webMobile: {
            locator: "//*[@qa-label='LoginContinueBtn']",
            strategy: 'XPath',
        },
        web: {
            locator: "//*[@data-qa-label='SignInBtn']",
            strategy: 'XPath',
        },
    },
    loginEmailButton: {
        web: {
            locator: "//*[@data-qa-label='LogInLnk']",
            strategy: 'XPath',
        },
    },
    usernameField: {
        webMobile: {
            locator: "//*[@data-qa-label='BKGbSignInEmailTxt']",
            strategy: 'XPath',
        },
        web: {
            locator: "//*[@data-qa-label='SignInEmailTxt']",
            strategy: 'XPath',
        },
    },
    passwordField: {
        webMobile: {
            locator: "//*[@data-qa-label='BKGbSignInPasswordTxt']",
            strategy: 'XPath',
        },
        web: {
            locator: "//*[@data-qa-label='SignInPasswordTxt']",
            strategy: 'XPath',
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
            locator: "//*[@qa-label='LocationServicesOffBtn']",
            strategy: 'XPath',
        },
    },
    loginSignupBtn: {
        web: {
            locator: "//*[@data-qa-label='LoginSignUpSettingsBtn']",
            strategy: 'XPath',
        },
    },
}

export const LOCATORS = {
    ...HOME_PAGE_ELEMENTS,
    ...LOGIN_PAGE_ELEMENTS,
    ...LOCATION_PAGE_ELEMENTS,
};

export const LOGIN_DATA = {
    username: 'pedro.tillstertests@gmail.com',
    password: '12345678'
};

export const TEST_DATA = {
    ...LOGIN_DATA,
};