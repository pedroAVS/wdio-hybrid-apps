import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

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

export class ElementLocatorLoader {
  private static elements: Record<string, ElementLocator> = {};

  static clearElements(): void {
    this.elements = {};
  }

  static getElementLocator(elementName: string, page: string): ElementLocator {
    console.log("HERE:::" + Object.keys(this.elements).length)
    if (Object.keys(this.elements).length === 0) {
      const elementsPath = path.join(__dirname, '..', 'pages', 'locators', `${page}.yaml`);
      console.log(`Loading element locators from ${elementsPath}`)
      this.loadElements(elementsPath);
    }
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
}