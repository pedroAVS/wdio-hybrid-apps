// Note: StepRunner is a utility function that will run a step from a page object

export async function runStep(pageObject: any, methodName: string, ...params: any[]) {
  console.log("RUNNING STEP::: " + methodName);
  console.log("RUNNING PAGE OBJECT::: " + pageObject)
  console.log("RUNNING PLATFORM::: " + (global as any).platformName);
  let platform = (global as any).platformName;
  if (platform === 'android' || platform === 'ios') {
    platform = 'mobile';
  }
  const platformModule = await import(`../pages/${platform}/${pageObject}`);
  const pageObjectInstance = new platformModule.default();
  const result = await pageObjectInstance[methodName](... params);
  return result;
}
