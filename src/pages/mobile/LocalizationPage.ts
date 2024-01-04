import { EI } from "../../helpers/ElementInteractor";
import { LocatorsType } from "../../helpers/ElementLocatorLoader";

export default class LocalizationPage {
    denyLocalizationButton: keyof LocatorsType;

    constructor() {
        this.denyLocalizationButton = 'denyLocalizationButton';
    }

    async dismissLocationServices() {
        await EI.clickElement(this.denyLocalizationButton);
    }
}