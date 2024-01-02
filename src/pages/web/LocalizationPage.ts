import { ElementInteractor } from "../../helpers/ElementInteractor";
import { LocatorsType } from "../../helpers/ElementLocatorLoader";

export default class LocalizationPage {
    denyLocalizationButton: keyof LocatorsType;

    constructor() {
        this.denyLocalizationButton = 'denyLocalizationButton';
    }

    async dismissLocationServices() {
        await browser.url('');
        try {
            await ElementInteractor.clickElement(this.denyLocalizationButton);
        } catch (error) {
            console.log('Deny locations pop up not found, location service enabled');
        }
    }
}