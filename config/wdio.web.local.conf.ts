//let env: string = process.env.tenant;
//let tenant: string = process.env.env;

export const config = {
  before: function () {
    global.platformName = 'web';
    
  },

    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
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
    baseUrl: `https://www-${process.argv[3]}.testapp.com/`,
  };