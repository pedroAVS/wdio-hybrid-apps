import path from 'path';
import { ElementInteractor } from '../../helpers/ElementInteractor';

export default class HomePage {
  denyLocalizationButton: string;
  headerSettingsButton: string;
  loginSignupButton: string;
  pageName: string;

  constructor() {
    this.denyLocalizationButton = 'denyLocalizationButton';
    this.headerSettingsButton = 'headerSettingsButton';
    this.loginSignupButton = 'loginSignupButton';
    this.pageName = path.basename(__filename, '.ts');
  }

  async clickLoginButton() {
    await ElementInteractor.clickElement(this.denyLocalizationButton, this.pageName);
    await ElementInteractor.clickElement(this.headerSettingsButton, this.pageName);
    await ElementInteractor.clickElement(this.loginSignupButton, this.pageName);
  }
}