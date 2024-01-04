import { EI } from '../../helpers/ElementInteractor';
import { LocatorsType } from '../../helpers/ElementLocatorLoader';

export default class HomePage {
  loginSignupBtn: keyof LocatorsType;
  registeredGreetingText: keyof LocatorsType;

  constructor() {
    this.loginSignupBtn = 'loginSignupBtn';
    this.registeredGreetingText = 'registeredGreetingText';
  }

  async clickLoginButton() {
    await EI.clickElement(this.loginSignupBtn);
  }

  async getRegisteredGreetingText() {
    return await EI.getElementText(this.registeredGreetingText);
  }
  
}