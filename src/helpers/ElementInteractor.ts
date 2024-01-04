import { LocatorsType } from './ElementLocatorLoader';
import { ElementSelector } from './ElementSelector';

export class EI {
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

  static async isElementDisplayed(elementName: keyof LocatorsType): Promise<boolean> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    return await element.isDisplayed();
  }

  static async isElementEnabled(elementName: keyof LocatorsType): Promise<boolean> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    return await element.isEnabled();
  }

  static async isElementExisting(elementName: keyof LocatorsType): Promise<boolean> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    return await element.isExisting();
  }

  static async isElementClickable(elementName: keyof LocatorsType): Promise<boolean> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    return await element.isClickable();
  }

  static async scrollIntoView(elementName: keyof LocatorsType): Promise<void> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    await element.scrollIntoView();
  }

  static async clearElementText(elementName: keyof LocatorsType): Promise<void> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    await element.clearValue();
  }

  static async getElementAttribute(elementName: keyof LocatorsType, attributeName: string): Promise<string> {
    const locatorString = await ElementSelector.getElement(elementName);
    const element = await $(locatorString);
    return await element.getAttribute(attributeName);
  }
}