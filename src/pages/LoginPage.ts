import { EI } from '../helpers/ElementInteractor';
import { LocatorsType } from '../helpers/ElementLocatorLoader';

export default class LoginPage {
    static usernameField: keyof LocatorsType = 'usernameField';
    static passwordField: keyof LocatorsType = 'passwordField';
    static passwordVisibleField: keyof LocatorsType = 'passwordVisibleField';
    static loginButton: keyof LocatorsType = 'loginButton';
    static errorPopup: keyof LocatorsType  = 'errorPopup';
    static errorPopupCloseButton: keyof LocatorsType = 'errorPopupCloseButton';
    static showPasswordButton: keyof LocatorsType = 'showPasswordButton';

    static async setUsername(username: string) {
        await EI.setElementValue(this.usernameField, username);
    }

    static async setPassword(password: string) {
        await EI.setElementValue(this.passwordField, password);
    }

    static async clickLoginButton() {
        await EI.isElementClickable(this.loginButton);
        await EI.clickElement(this.loginButton);
    }

    static async getErrorPopupText(): Promise<string> {
        await EI.isElementDisplayed(this.errorPopup);
        return await EI.getElementText(this.errorPopup);
    }

    static async closeErrorPopup() {
        await EI.isElementDisplayed(this.errorPopupCloseButton);
        await EI.isElementClickable(this.errorPopupCloseButton);
        await EI.clickElement(this.errorPopupCloseButton);
    }

    static async login(username: string, password: string) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLoginButton();
    }

    static async clickShowPassword() {
        await EI.isElementClickable(this.showPasswordButton);
        await EI.clickElement(this.showPasswordButton);
    }

    static async getPasswordFieldText() {
        await EI.isElementDisplayed(this.passwordVisibleField);
        const element = await EI.getElement(this.passwordVisibleField);
        return await element.getValue();
    }

    static async isLoginButtonClickable() {
        return await EI.isElementClickable(this.loginButton);
    }

    static async clearTextFields() {
        await EI.clearElementText(this.usernameField);
        await EI.clearElementText(this.passwordField);
    }
}