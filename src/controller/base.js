const axios = require('axios');

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://server.yunliang.cloud',
})

module.exports = class extends think.Controller {
  __before() {}
  CenterServices(config){
    return instance({
      ...config,
      headers: {
        ...config.headers,
        appid: this.ctx.request.header.appid,
        cookie: this.ctx.request.header.cookie
      }
    })
  }
};
