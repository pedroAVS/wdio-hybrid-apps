import { EI } from '../helpers/ElementInteractor';
import { LocatorsType } from '../helpers/ElementLocatorLoader';

export default class HomePage {
  static headerSettingsButton: keyof LocatorsType = 'headerSettingsButton';
  static loginSignupButton: keyof LocatorsType = 'loginSignupButton';
  static registeredGreetingText: keyof LocatorsType = 'registeredGreetingText';
  static loginEmailButton: keyof LocatorsType = 'loginEmailButton';

  static async clickLoginButton() {
    if (driver.isAndroid || driver.isIOS) {
      await EI.clickElement(this.headerSettingsButton);
    }
    await EI.clickElement(this.loginSignupButton);
  }

  static async getRegisteredGreetingText() {
    return await EI.getElementText(this.registeredGreetingText);
  }

  static async clickWelcomeLoginEmailButton() {
    await EI.isElementClickable(this.loginEmailButton);
    await EI.clickElement(this.loginEmailButton);
  }
}