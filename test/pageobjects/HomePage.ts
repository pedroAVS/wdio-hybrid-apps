import { ElementSelector } from '../../src/helpers/ElementSelector';

export class HomePage {
  static async clickDenyLocalizationButton(): Promise<void> {
    const denyLocalizationButton = await $(await ElementSelector.getElement('denyLocalizationButton'));
    await denyLocalizationButton.click();
  }

  static async clickHeaderButton(): Promise<void> {
    const headerButton = await $(await ElementSelector.getElement('headerSettingsButton'));
    await headerButton.click();
  }

  static async clickLoginSignupButton(): Promise<void> {
    const loginSignupButton = await $(await ElementSelector.getElement('loginSignupButton'));
    await loginSignupButton.click();
  }
}