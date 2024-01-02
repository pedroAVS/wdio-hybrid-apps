import { ElementInteractor } from "../../helpers/ElementInteractor";
import { LocatorsType } from "../../helpers/ElementLocatorLoader";

export default class LocalizationPage {
    denyLocalizationButton: keyof LocatorsType;

    constructor() {
        this.denyLocalizationButton = 'denyLocalizationButton';
    }

    async dismissLocationServices() {
        await ElementInteractor.clickElement(this.denyLocalizationButton);
    }
}