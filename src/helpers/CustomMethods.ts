export async function runStep(pageObject: any, methodName: string) {
    let platform = (global as any).platformName;
    const platformModule = await import(`../pageobjects/${platform}/${pageObject}`);
    const pageObjectInstance = new platformModule.default();
    await pageObjectInstance[methodName]();
  }