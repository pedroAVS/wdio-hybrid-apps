import { LocatorsType } from './ElementLocatorLoader';
import { ElementSelector } from './ElementSelector';

export class ElementInteractor {
  static async clickElement(elementName: keyof LocatorsType): Promise<void> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    await element.click();
  }

  static async setElementValue(elementName: keyof LocatorsType, value: string): Promise<void> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    await element.setValue(value);
  }

  static async getElementText(elementName: keyof LocatorsType): Promise<string> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    return await element.getText();
  }

  static async getElement(elementName: keyof LocatorsType): Promise<WebdriverIO.Element> {
    const locatorString = await ElementSelector.getElement(elementName);
    return await $(locatorString);
  }
}