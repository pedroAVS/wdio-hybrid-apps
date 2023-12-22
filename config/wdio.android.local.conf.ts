export const config = {

  before: function (capabilities, specs) {
    global.platformName = capabilities[0].platformName.toLowerCase();
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
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '12',
    'appium:app': '/Users/pedrosousa/Downloads/enp-us-mobile-6.0.9-1-qa-a-debug.apk',
    'appium:automationName': 'UiAutomator2',
  }],
  services: ['appium'],
  appium: {
    command: 'appium',
    logPath: './appium_logs',
  },
};
