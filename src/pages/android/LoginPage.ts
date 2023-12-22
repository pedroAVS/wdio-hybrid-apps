import { ElementSelector } from '../../helpers/ElementSelector';

export default class LoginPage {
  async loginSuccessfully(username: string, password: string) {
    const usernameField = await $(await ElementSelector.getElement('usernameField'));
    await usernameField.setValue(username);
    const passwordField = await $(await ElementSelector.getElement('passwordField'));
    await passwordField.setValue(password);
    const loginEmailButton = await $(await ElementSelector.getElement('loginEmailButton'));
    await loginEmailButton.click();
    const loginButton = await $(await ElementSelector.getElement('loginButton'));
    await loginButton.click();
  }
}