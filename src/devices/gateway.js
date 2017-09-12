const network = require('../network/network.js');
/**
 * 设备：智能网关
 */
class Gateway {
  constructor() {
    network.broadcast('{"cmd":"whois"}');
  }
}

module.exports = Gateway;
