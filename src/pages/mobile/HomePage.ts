import { ElementInteractor } from '../../helpers/ElementInteractor';
import { LocatorsType } from '../../helpers/ElementLocatorLoader';

export default class HomePage {
  headerSettingsButton: keyof LocatorsType;
  loginSignupButton: keyof LocatorsType;

  constructor() {
    this.headerSettingsButton = 'headerSettingsButton';
    this.loginSignupButton = 'loginSignupButton';
  }

  async clickLoginButton() {
    await ElementInteractor.clickElement(this.headerSettingsButton);
    await ElementInteractor.clickElement(this.loginSignupButton);
  }
}