import { ElementSelector } from './ElementSelector';

export class ElementInteractor {
  static async clickElement(elementName: string, page: string): Promise<void> {
    const locatorString = await ElementSelector.getElement(elementName, page);
    const element = await $(locatorString);
    await element.click();
  }

  static async setElementValue(elementName: string, value: string, page: string): Promise<void> {
    const locatorString = await ElementSelector.getElement(elementName, page);
    const element = await $(locatorString);
    await element.setValue(value);
  }
}