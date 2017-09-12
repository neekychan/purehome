// const aiotConf = require('../config/aiot.json');
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const broadcast = (message, port) => {
  client.send(Buffer.from(message), port, '255.255.255.255');
};

const unicast = (message, address, port) => {
  client.send(Buffer.from(message), port, address);
};

module.exports = {
  broadcast,
  unicast
};
