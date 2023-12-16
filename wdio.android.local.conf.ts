export const config = {
  runner: 'local',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  specs: [
    './test/*'
  ],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator',
    'appium:platformVersion': '12',
    'appium:app': '**/**/***.apk',
    'appium:automationName': 'UiAutomator2',
  }],
  services: ['appium'],
  appium: {
    command: 'appium',
    logPath: './appium_logs',
  },
};

export function getPlatformName() {
  return config.capabilities[0].platformName;
}