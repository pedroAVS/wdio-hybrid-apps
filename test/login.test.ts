import { HomePage } from './pageobjects/HomePage';
import { LoginPage } from './pageobjects/LoginPage';

describe('Login Test', () => {

  beforeEach(async () => {
    await HomePage.clickDenyLocalizationButton();
  });

  it('should click on login button', async () => {
    console.log(driver.capabilities);
    await HomePage.clickHeaderButton();
    await HomePage.clickLoginSignupButton();
    await LoginPage.clickLoginEmailButton();
    await LoginPage.enterUsername('test@test.com');
    await LoginPage.enterPassword('test123');
    await LoginPage.clickLoginButton();
  });

});