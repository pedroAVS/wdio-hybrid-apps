import { runStep } from "../src/helpers/Utils";

describe('Login Test', () => {

  it('should click on login button', async () => {
    await runStep('HomePage', 'clickLoginButton');
    await runStep('LoginPage', 'loginSuccessfully');
  });

});