import path from 'path';
import { ElementInteractor } from '../../helpers/ElementInteractor';

export default class HomePage {
  denyLocalizationButton: string;
  headerSettingsButton: string;
  loginSignupButton: string;

  constructor() {
    this.denyLocalizationButton = 'denyLocalizationButton';
    this.headerSettingsButton = 'headerSettingsButton';
    this.loginSignupButton = 'loginSignupButton';
  }

  async clickLoginButton() {
    const pageName = path.basename(__filename, '.ts');
    
    await ElementInteractor.clickElement(this.denyLocalizationButton, pageName);
    await ElementInteractor.clickElement(this.headerSettingsButton, pageName);
    await ElementInteractor.clickElement(this.loginSignupButton, pageName);
  }
}