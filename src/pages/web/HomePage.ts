import { ElementInteractor } from '../../helpers/ElementInteractor';
import { LocatorsType } from '../../helpers/ElementLocatorLoader';

export default class HomePage {
  loginSignupBtn: keyof LocatorsType;

  constructor() {
    this.loginSignupBtn = 'loginSignupBtn';
  }

  async clickLoginButton() {
    await ElementInteractor.clickElement(this.loginSignupBtn);
  }
}