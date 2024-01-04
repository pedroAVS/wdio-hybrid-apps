import { EI } from '../../helpers/ElementInteractor';
import { LocatorsType } from '../../helpers/ElementLocatorLoader';

export default class LoginPage {
    usernameField: keyof LocatorsType;
    passwordField: keyof LocatorsType;
    passwordVisibleField: keyof LocatorsType;
    loginButton: keyof LocatorsType;
    errorPopup: keyof LocatorsType;
    errorPopupCloseButton: keyof LocatorsType;
    showPasswordButton: keyof LocatorsType;

    constructor() {
        this.usernameField = 'usernameField';
        this.passwordField = 'passwordField';
        this.passwordVisibleField = 'passwordVisibleField';
        this.loginButton = 'loginButton';
        this.errorPopup = 'errorPopup';
        this.errorPopupCloseButton = 'errorPopupCloseButton';
        this.showPasswordButton = 'showPasswordButton';
    }

    async setUsername(username: string) {
        await EI.setElementValue(this.usernameField, username);
    }

    async setPassword(password: string) {
        await EI.setElementValue(this.passwordField, password);
    }

    async clickLoginButton() {
        await EI.isElementClickable(this.loginButton);
        await EI.clickElement(this.loginButton);
    }

    async getErrorPopupText(): Promise<string> {
        await EI.isElementDisplayed(this.errorPopup);
        return await EI.getElementText(this.errorPopup);
    }

    async closeErrorPopup() {
        await EI.isElementDisplayed(this.errorPopupCloseButton);
        await EI.isElementClickable(this.errorPopupCloseButton);
        await EI.clickElement(this.errorPopupCloseButton);
    }

    async login(username: string, password: string) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLoginButton();
    }

    async clickShowPassword() {
        await EI.isElementClickable(this.showPasswordButton);
        await EI.clickElement(this.showPasswordButton);
    }

    async getPasswordFieldText() {
        await EI.isElementDisplayed(this.passwordVisibleField);
        const element = await EI.getElement(this.passwordVisibleField);
        return await element.getValue();
    }

    async isLoginButtonClickable() {
        return await EI.isElementEnabled(this.loginButton);
    }

    async clearTextFields() {
        await EI.clearElementText(this.usernameField);
        await EI.clearElementText(this.passwordField);
    }
}
