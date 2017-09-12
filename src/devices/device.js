const request = require('../network/request');

class Device {
  constructor (did) {
    this.did = did;
  }

  async getDevice () {
    const data = await request.aiot({
      url: '/open/device/query',
      playload: {
        did: this.did
      }
    });

    return data;
  }
}

module.exports = Device;
