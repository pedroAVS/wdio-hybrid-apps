import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { IOSSelectorStrategies, AndroidSelectorStrategies, WebViewSelectorStrategies } from './Strategies';

declare global {
  namespace NodeJS {
    interface Global {
      platformName: string;
    }
  }
}

interface ElementLocator {
  [key: string]: Locator | undefined;
  iosLocator?: Locator;
  androidLocator?: Locator;
  webLocator?: Locator;
}

interface Locator {
  locator: string;
  strategy: string;
}

export class ElementSelector {
  private static elements: Record<string, ElementLocator> = {};

  static getElementLocator(elementName: string): ElementLocator {
    if (Object.keys(this.elements).length === 0) {
      const elementsPath = path.join(__dirname, 'locators', 'elements.yaml');
      this.loadElements(elementsPath);
    }
    console.log("ELEMENTS::: " + JSON.stringify(this.elements[elementName]));
    return this.elements[elementName] || {};
  }

  private static loadElements(filePath: string): void {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      this.elements = yaml.load(fileContents) as Record<string, ElementLocator>;
    } catch (error) {
      throw new Error(`Error loading element locators: ${error}`);
    }
  }

  static async getLocatorForPlatform(platform: string, locator: Locator): Promise<string> {
    let strategy: string;
    switch (platform.toLowerCase()) {
      case 'ios':
        await this.switchToContext(platform)
        strategy = IOSSelectorStrategies[locator.strategy as keyof typeof IOSSelectorStrategies];
        break;
      case 'android':
        await this.switchToContext(platform)
        strategy = AndroidSelectorStrategies[locator.strategy as keyof typeof AndroidSelectorStrategies];
        break;
      case 'web':
        if (driver.isAndroid || driver.isIOS) {
          await this.switchToContext('web')
        }
        strategy = WebViewSelectorStrategies[locator.strategy as keyof typeof WebViewSelectorStrategies];
        break;
      default:
        throw new Error(`Platform ${platform} is not supported`);
    }

    if (!strategy) {
      throw new Error(`Strategy not found for ${platform}`);
    }

    if (locator.strategy.toLowerCase() === 'xpath') {
      return locator.locator;
    }

    return `${strategy}${locator.locator}`;
  }

  static async switchToContext(platform: string): Promise<void> {
    switch (platform.toLowerCase()) {
      case 'ios':
      case 'android':
        await driver.switchContext('NATIVE_APP');
        break;
      case 'web':
        const contexts = await driver.getContexts() as any[];
        const webViewContext = contexts.find(context => context.includes('WEBVIEW'));
        if (webViewContext) {
          await driver.switchContext(webViewContext);
        } else {
          throw new Error('Webview context not found');
        }
        break;
      default:
        throw new Error(`Platform ${platform} is not supported`);
    }
  }

  static async getElement(elementName: string): Promise<string> {
    let platform = (global as any).platformName;
    console.log("RUNING ON::: " + platform);
    const elementLocators = this.getElementLocator(elementName);
    let locator = elementLocators[platform.toLowerCase()];
    if (!locator) {
      locator = elementLocators['web'];
      if (!locator) {
        throw new Error(`Locator not found for element ${elementName} on platform ${platform}`);
      }
      platform = 'web';
    }
    return this.getLocatorForPlatform(platform, locator);
  }

  static async clickElement(elementName: string): Promise<void> {
    const locatorString = await this.getElement(elementName);
    const element = await $(locatorString);
    await element.click();
  }

}

export {};
