// ElementSelector.ts
import { IOSSelectorStrategies, AndroidSelectorStrategies, WebViewSelectorStrategies } from './Strategies';
import { ElementLocatorLoader } from './ElementLocatorLoader';
import { ContextSwitcher } from './ContextSwitcher';
import { Locator } from './Types';

declare global {
  namespace NodeJS {
    interface Global {
      platformName: string;
    }
  }
}

export class ElementSelector {
  static async getElement(elementName: string, page: string): Promise<string> {
    let platform = (global as any).platformName;
    ElementLocatorLoader.clearElements();
    const elementLocators = ElementLocatorLoader.getElementLocator(elementName, page);
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

  static async getLocatorForPlatform(platform: string, locator: Locator): Promise<string> {
    let strategy: string;
    switch (platform.toLowerCase()) {
      case 'ios':
        await ContextSwitcher.switchToContext(platform)
        strategy = IOSSelectorStrategies[locator.strategy as keyof typeof IOSSelectorStrategies];
        break;
      case 'android':
        await ContextSwitcher.switchToContext(platform)
        strategy = AndroidSelectorStrategies[locator.strategy as keyof typeof AndroidSelectorStrategies];
        break;
      case 'web':
        if (driver.isAndroid || driver.isIOS) {
          await ContextSwitcher.switchToContext('web')
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
}