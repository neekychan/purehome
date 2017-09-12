const requestPromise = require('request-promise');
const aiotConfig = require('../config/aiot.json');
const baseConfig = require('../config/base.json');
// const logger = require('../util/logger');

const request = async function req(config) {
  const conf = Object.assign({}, config);

  // logger.log(`${config.method}  ${config.class}:${conf}`);

  const data = await requestPromise(conf);
  return data;
};

module.exports.request = request;
const aiot = async function req(config) {
  const aiotReqConf = {
    method: 'POST',
    uri: aiotConfig.apiHost + config.url,
    headers: {
      Appid: baseConfig.appId,
      Appkey: baseConfig.appKey,
      Openid: baseConfig.openId,
      'Access-Token': baseConfig.accessToken
    },
    postData: {
      mimeType: 'application/json',
      params: Object.keys(config.playload).map(key => ({ [key]: config.playload[key] }))
    },
    class: 'aiot'
  };

  const conf = Object.assign({}, aiotReqConf, config);
  const data = await request(conf);

  return data;
};

module.exports.aiot = aiot;

