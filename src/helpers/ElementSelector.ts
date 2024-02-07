// ElementSelector.ts
import { IOSSelectorStrategies, AndroidSelectorStrategies } from './Strategies';
import { ElementLocatorLoader, LocatorsType } from './ElementLocatorLoader';
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
  static async getElement(elementName: keyof LocatorsType): Promise<string> {
    let platform = (global as any).platformName;
    const elementLocators = ElementLocatorLoader.getElementLocator(elementName);
    let locator = elementLocators[platform.toLowerCase() as 'ios' | 'android' | 'web'];

    if (!locator && (platform.toLowerCase() === 'ios' || platform.toLowerCase() === 'android')) {
      locator = elementLocators['webMobile'];
      platform = 'web';
    }

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
        return locator.locator;
      default:
        throw new Error(`Platform ${platform} is not supported`);
    }
    
    return `${strategy}${locator.locator}`;
  }
}