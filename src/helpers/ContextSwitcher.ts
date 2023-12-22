export class ContextSwitcher {
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
  }