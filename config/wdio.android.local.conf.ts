export const config = {

  beforeSession: function () {
    global.platformName = 'android'
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
    platformName: 'Android',
    'appium:deviceName': 'pixel',
    'appium:platformVersion': '12',
    'appium:app': '**/app-debug.apk',
    'appium:automationName': 'UiAutomator2',
    'appium:chromedriverExecutable': './node_modules/chromedriver/lib/chromedriver/chromedriver',
  }],
  services: ['appium'],
  appium: {
    command: 'appium',
    args: {
      allowInsecure: 'chromedriver_autodownload',
    },
    logPath: './appium_logs',
  },
};
