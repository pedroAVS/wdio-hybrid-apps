// wdio.shared.conf.js

export const config = {
  runner: 'local',
  specs: [
    './test/*' 
  ],
  logLevel: 'info',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'http://localhost', 
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  
  framework: 'mocha',
  reporters: ['dot', 'spec'],

  services: [],
};
