import { ElementInteractor } from '../../helpers/ElementInteractor';
import Utils from '../../helpers/Utils';
import * as path from 'path';

interface LoginData {
  username: string;
  password: string;
}

export default class LoginPage {
  usernameField: string;
  passwordField: string;
  loginEmailButton: string;
  loginButton: string;
  
  constructor() {
    this.usernameField = 'usernameField';
    this.passwordField = 'passwordField';
    this.loginEmailButton = 'loginEmailButton';
    this.loginButton = 'loginButton';
  }

  async loginSuccessfully(username: string = '', password: string = '') {
    const pageName = path.basename(__filename, '.ts');
    const dataFilePath = path.join(__dirname, '..', 'data', `${pageName}.yaml`);
    const data = Utils.readYamlFile(dataFilePath) as LoginData;
    username = username || data.username;
    password = password || data.password;

    await ElementInteractor.clickElement(this.loginEmailButton, pageName);
    await ElementInteractor.setElementValue(this.usernameField, username, pageName);
    await ElementInteractor.setElementValue(this.passwordField, password, pageName);
    await ElementInteractor.clickElement(this.loginButton, pageName);
  }
}
