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
  pageName: string;
  dataFilePath: string;
  data: LoginData;
  
  constructor() {
    this.usernameField = 'usernameField';
    this.passwordField = 'passwordField';
    this.loginEmailButton = 'loginEmailButton';
    this.loginButton = 'loginButton';
    this.pageName = path.basename(__filename, '.ts');
    this.dataFilePath = path.join(__dirname, '..', 'data', `${this.pageName}.yaml`);
    this.data = Utils.readYamlFile(this.dataFilePath) as LoginData;
  }

  async loginSuccessfully(username?: string, password?: string) {
    username = this.data.username;
    password = this.data.password;

    await ElementInteractor.clickElement(this.loginEmailButton, this.pageName);
    await ElementInteractor.setElementValue(this.usernameField, username, this.pageName);
    await ElementInteractor.setElementValue(this.passwordField, password, this.pageName);
    await ElementInteractor.clickElement(this.loginButton, this.pageName);
  }
}
