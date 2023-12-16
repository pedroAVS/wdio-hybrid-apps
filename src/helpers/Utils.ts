import { ElementLocator } from "./Types";
import { AndroidSelectorStrategies, IOSSelectorStrategies, WebViewSelectorStrategies } from "./Strategies";

class Utils {
  static async getLocatorPerPlatformAndStrategy(locator: ElementLocator): Promise<string> {
    let platformLocator;
  
    if (driver.isIOS) {
      platformLocator = locator.iosLocator;
    } else if (driver.isAndroid) {
      platformLocator = locator.androidLocator;
    } else if (this.isWebViewContext(await driver.getContext() as string)) {
      platformLocator = locator.webLocator;
    }
  
    if (platformLocator === undefined) {
      throw new Error('Platform locator is undefined');
    }
  
    if (
      locator.androidLocator === undefined &&
      locator.iosLocator === undefined &&
      locator.webLocator === undefined
    ) {
      throw new Error('Locator is undefined');
    }
  
    const currentContext = await driver.getContext() as string;
  
    if (
      driver.isIOS &&
      locator.iosLocator !== undefined &&
      (locator.iosLocator.strategy in IOSSelectorStrategies)
    ) {
      return `${platformLocator.strategy}${locator.iosLocator.locator}`;
    } else if (
      driver.isAndroid &&
      locator.androidLocator !== undefined &&
      (locator.androidLocator.strategy in AndroidSelectorStrategies)
    ) {
      return `${platformLocator.strategy}${locator.androidLocator.locator}`;
    } else if (
      this.isWebViewContext(currentContext) &&
      locator.webLocator !== undefined &&
      (locator.webLocator.strategy in WebViewSelectorStrategies)
    ) {
      return `${platformLocator.strategy}${locator.webLocator.locator}`;
    }
  
    throw new Error('Platform locator is undefined or strategy is invalid');
  }

  static async switchContext(): Promise<void> {
    const contexts = await driver.getContexts();
    const currentContext = await driver.getContext() as string;
    let changeContext: any; 

    for (const context of contexts) {
      if (currentContext !== context) {
        changeContext = context;
        break;
      }
    }

    if (changeContext) {
      await driver.switchContext(changeContext);
    } else {
      console.error("Desired context not found!");
    }
  }

  private static isWebViewContext(context: string): boolean {
    return context.includes('WEBVIEW');
  }
}

export default Utils;