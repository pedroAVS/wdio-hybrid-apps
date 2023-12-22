import fs from 'fs';
import yaml from 'js-yaml';

export async function runStep(pageObject: any, methodName: string) {
  console.log("RUNNING STEP::: " + methodName);
  console.log("RUNNING PAGE OBJECT::: " + pageObject)
  console.log("RUNNING PLATFORM::: " + (global as any).platformName);
  let platform = (global as any).platformName;
  const platformModule = await import(`../pages/${platform}/${pageObject}`);
  const pageObjectInstance = new platformModule.default();
  await pageObjectInstance[methodName]();
}

class Utils {

  static readYamlFile(filePath: string) {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = yaml.load(fileContents);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

}

export default Utils;