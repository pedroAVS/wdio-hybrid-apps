import { EI } from "../helpers/ElementInteractor";
import { LocatorsType } from "../helpers/ElementLocatorLoader";

export default class LocalizationPage {
    static denyLocalizationButton: keyof LocatorsType = 'denyLocalizationButton';

    static async dismissLocationServices() {
        try {
            await EI.clickElement(this.denyLocalizationButton);
        } catch (error) {
            console.log('Deny locations pop up not found, location service enabled');
        }
    }
}