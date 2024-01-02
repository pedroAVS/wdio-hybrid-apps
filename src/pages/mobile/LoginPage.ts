import { ElementInteractor } from '../../helpers/ElementInteractor';
import { LocatorsType } from '../../helpers/ElementLocatorLoader';
import { LOGIN_DATA } from '../locators/constants';

export default class LoginPage {
  usernameField: keyof LocatorsType;
  passwordField: keyof LocatorsType;
  loginEmailButton: keyof LocatorsType;
  loginButton: keyof LocatorsType;
  registeredGreetingText: keyof LocatorsType;
  
  constructor() {
    this.usernameField = 'usernameField';
    this.passwordField = 'passwordField';
    this.loginEmailButton = 'loginEmailButton';
    this.loginButton = 'loginButton';
    this.registeredGreetingText = 'registeredGreetingText';
  }

  async loginSuccessfully(username?: string, password?: string) {
    username = username || LOGIN_DATA.username;
    password = password || LOGIN_DATA.password;

    await ElementInteractor.clickElement(this.loginEmailButton);
    await ElementInteractor.setElementValue(this.usernameField, username);
    await ElementInteractor.setElementValue(this.passwordField, password);
    await ElementInteractor.clickElement(this.loginButton);
    console.log(await ElementInteractor.getElementText(this.registeredGreetingText))
    await expect(await ElementInteractor.getElement(this.registeredGreetingText)).toBeDisplayed()
  }
}
