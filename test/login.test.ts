import { TEST_DATA } from "../src/pages/locators/constants";
import { faker } from '@faker-js/faker';
import { LoginPage, HomePage, LocalizationPage } from "../src/pages";

describe('Login Test', () => {

  before(async () => {
    await LocalizationPage.dismissLocationServices();
    await HomePage.clickLoginButton();
    // check if the platform is web, if not, then click the welcome login button
    if ((global as any).platformName !== 'web') {
      await HomePage.clickWelcomeLoginEmailButton();
    }
  });

  beforeEach(async () => {
    await LoginPage.clearTextFields();
  });

  it('login button should be disabled when username field is blank', async () => {
    await LoginPage.setPassword(TEST_DATA.password);
    const loginButton: boolean = await LoginPage.isLoginButtonClickable();
    await expect(loginButton).toBeFalsy();
  });

  it('login button should be disabled when password field is blank', async () => {
    await LoginPage.setUsername(TEST_DATA.username);
    const loginButton: boolean = await LoginPage.isLoginButtonClickable();
    await expect(loginButton).toBeFalsy();
  });

  it('login button should be disabled when both fields are blank', async () => {
    const loginButton: boolean = await LoginPage.isLoginButtonClickable();
    await expect(loginButton).toBeFalsy();
  });

  it('should show password when "Show Password" option is enabled', async () => {
    await LoginPage.setPassword(TEST_DATA.password);
    await LoginPage.clickShowPassword();
    const passwordFieldType: string = await LoginPage.getPasswordFieldText();
    await expect(passwordFieldType).toEqual(TEST_DATA.password);
  });

  it('should be case sensitive for password field', async () => {
    const password: string = TEST_DATA.password.toUpperCase();
    await LoginPage.login(TEST_DATA.username, password);
    const errorPopupText: string = await LoginPage.getErrorPopupText();
    await expect(errorPopupText).toEqual(TEST_DATA.signupError);
    await LoginPage.closeErrorPopup();
  });

  it('should not login with invalid credentials', async () => {
    const fakeUsername: string = faker.internet.email();
    const fakePassword: string = faker.internet.password();
    await LoginPage.login(fakeUsername, fakePassword);
    const errorPopupText: string = await LoginPage.getErrorPopupText();
    expect(errorPopupText).toEqual(TEST_DATA.signupError)
    await LoginPage.closeErrorPopup();
  });

  it('should login successfully with valid credentials', async () => {
    await LoginPage.login(TEST_DATA.username, TEST_DATA.password);
    const registeredGreetingText: string = await HomePage.getRegisteredGreetingText();
    expect(registeredGreetingText).toBeDisplayed();
  });

});