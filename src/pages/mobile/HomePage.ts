import { EI } from '../../helpers/ElementInteractor';
import { LocatorsType } from '../../helpers/ElementLocatorLoader';

export default class HomePage {
  headerSettingsButton: keyof LocatorsType;
  loginSignupButton: keyof LocatorsType;
  registeredGreetingText: keyof LocatorsType;

  constructor() {
    this.headerSettingsButton = 'headerSettingsButton';
    this.loginSignupButton = 'loginSignupButton';
    this.registeredGreetingText = 'registeredGreetingText';
  }

  async clickLoginButton() {
    await EI.clickElement(this.headerSettingsButton);
    await EI.clickElement(this.loginSignupButton);
  }

  async getRegisteredGreetingText() {
    return await EI.getElementText(this.registeredGreetingText);
  }
}