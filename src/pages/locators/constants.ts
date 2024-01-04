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
            locator: "[qa-label='InvalidUsernamePasswordLbl']",
            strategy: 'XPath',
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
            locator: "[data-qa-label='ShowHideLnk']",
            strategy: 'XPath',
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