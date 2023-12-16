import { ElementSelector } from '../../src/helpers/ElementSelector';

export class LoginPage {
    static async enterUsername(username: string): Promise<void> {
        const usernameField = await $(await ElementSelector.getElement('usernameField'));
        await usernameField.setValue(username);
    }

    static async enterPassword(password: string): Promise<void> {
        const passwordField = await $(await ElementSelector.getElement('passwordField'));
        await passwordField.setValue(password);
    }

    static async clickLoginEmailButton(): Promise<void> {
        const loginButton = await $(await ElementSelector.getElement('loginEmailButton'));
        await loginButton.click();
    }

    static async clickLoginButton(): Promise<void> {
        const loginButton = await $(await ElementSelector.getElement('loginButton'));
        await loginButton.click();
    }
}