import { EI }  from '../helpers/ElementInteractor';
import { LocatorsType } from '../helpers/ElementLocatorLoader';

export default class CreateAccountPage {
    static firstNameInput: keyof LocatorsType = 'firstNameInput';
    static lastNameInput: keyof LocatorsType = 'lastNameInput';
    static emailInput: keyof LocatorsType = 'emailInput';
    static passwordInput: keyof LocatorsType = 'passwordInput';
    static confirmPasswordInput: keyof LocatorsType = 'confirmPasswordInput';
    static createAccountButton: keyof LocatorsType = 'createAccountButton';
    static createAccountErrorText: keyof LocatorsType = 'createAccountErrorText';

    static async enterEmail(email: string) {
        await EI.setElementValue(this.emailInput, email);
    }
    static async enterPassword(password: string) {
        await EI.setElementValue(this.passwordInput, password);
    }
    static async enterConfirmPassword(password: string) {
        await EI.setElementValue(this.confirmPasswordInput, password);
    }
    static async clickCreateAccountButton() {
        await EI.clickElement(this.createAccountButton);
    }
    static async getCreateAccountErrorText() {
        return await EI.getElementText(this.createAccountErrorText);
    }
}