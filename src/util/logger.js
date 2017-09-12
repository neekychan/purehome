const log4js = require('log4js');
const loggerConfig = require('./loggerConfig');

class Logger {
  constructor() {
    if (process.env.NODE_ENV === 'production') {
      log4js.configure(loggerConfig);
    }
  }
}

module.exports = Logger;
