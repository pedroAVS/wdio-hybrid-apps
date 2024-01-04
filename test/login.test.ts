import { TEST_DATA } from "../src/pages/locators/constants";
import { runStep } from "../src/utils/StepRunner";

describe('Login Test', () => {

  before(async () => {
    await runStep('LocalizationPage', 'dismissLocationServices');
    await runStep('HomePage', 'clickLoginButton');
    // check if the platform is web, if not, then click the welcome login button
    if ((global as any).platformName !== 'web') {
      await runStep('LoginPage', 'clickWelcomeLoginEmailButton');
    }
  });

  it('login button should be disabled when username field is blank', async () => {
    await runStep('LoginPage', 'clearTextFields');
    await runStep('LoginPage', 'setPassword', TEST_DATA.password);
    const loginButton: boolean = await runStep('LoginPage', 'isLoginButtonClickable');
    await expect(loginButton).toBeFalsy();
  });

  it('login button should be disabled when password field is blank', async () => {
    await runStep('LoginPage', 'clearTextFields');
    await runStep('LoginPage', 'setUsername', TEST_DATA.username);
    const loginButton: boolean = await runStep('LoginPage', 'isLoginButtonClickable');
    await expect(loginButton).toBeFalsy();
  });

  it('login button should be disabled when both fields are blank', async () => {
    await runStep('LoginPage', 'clearTextFields');
    const loginButton: boolean = await runStep('LoginPage', 'isLoginButtonClickable');
    await expect(loginButton).toBeFalsy();
  });

  it('should show password when "Show Password" option is enabled', async () => {
    await runStep('LoginPage', 'clearTextFields');
    await runStep('LoginPage', 'setPassword', TEST_DATA.password);
    await runStep('LoginPage', 'clickShowPassword');
    const passwordFieldType: string = await runStep('LoginPage', 'getPasswordFieldText');
    await expect(passwordFieldType).toEqual(TEST_DATA.password);
  });

  it('should be case sensitive for password field', async () => {
    await runStep('LoginPage', 'clearTextFields');
    const password: string = TEST_DATA.password.toUpperCase();
    await runStep('LoginPage', 'login', TEST_DATA.username, password);
    const errorPopupText: string = await runStep('LoginPage', 'getErrorPopupText');
    await expect(errorPopupText).toEqual(TEST_DATA.signupError);
    await runStep('LoginPage', 'closeErrorPopup');
  });

  it('should not login with invalid credentials', async () => {
    await runStep('LoginPage', 'clearTextFields');
    await runStep('LoginPage', 'login', 'invalidUsername@TEST.COM', 'invalidPassword');
    const errorPopupText: string = await runStep('LoginPage', 'getErrorPopupText');
    expect(errorPopupText).toEqual(TEST_DATA.signupError)
    await runStep('LoginPage', 'closeErrorPopup');
  });

  it('should login successfully with valid credentials', async () => {
    await runStep('LoginPage', 'login', TEST_DATA.username, TEST_DATA.password);
    const registeredGreetingText: string = await runStep('HomePage', 'getRegisteredGreetingText');
    expect(registeredGreetingText).toBeDisplayed();
  });

});