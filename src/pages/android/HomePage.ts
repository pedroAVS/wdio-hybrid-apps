import { ElementSelector } from '../../helpers/ElementSelector';

export default class HomePage {
  async clickLoginButton() {
    const denyLocalizationButton = await $(await ElementSelector.getElement('denyLocalizationButton'));
    await denyLocalizationButton.click();
    const headerButton = await $(await ElementSelector.getElement('headerSettingsButton'));
    await headerButton.click();
    const loginSignupButton = await $(await ElementSelector.getElement('loginSignupButton'));
    await loginSignupButton.click();
  }
}