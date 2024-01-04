export const config = {
  before: function () {
    (global as any).platformName = 'web';
    browser.url('/');
  },
    logLevel: 'silent',
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    reporters: ['dot', 'spec'],
    specs: [
      '../test/*'
    ],
    capabilities: [{
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--window-size=1280,800'],
      }
    }],
    services: ['chromedriver'],
    baseUrl: `https://www-${process.argv[3]}.app.com/`,
  };