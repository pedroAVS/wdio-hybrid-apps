import { LOCATORS } from '../pages/locators/constants';

interface ElementLocator {
  ios?: Locator;
  android?: Locator;
  webMobile?: Locator;
  web?: Locator;
}

interface Locator {
  locator: string;
  strategy?: string;
}

export type LocatorsType = typeof LOCATORS;

export class ElementLocatorLoader {
  static getElementLocator(elementName: keyof LocatorsType): ElementLocator {
    return LOCATORS[elementName] || {};
  }
}