const axios = require('axios');

module.exports = class extends think.Controller {
  __before() {}
  CenterServices(){
    const instance = axios.create({
      withCredentials: true,
      baseURL: 'http://server.yunliang.cloud',
    })
    instance.interceptors.request.use((requestConfig) => {
      requestConfig.headers = {
        Appid: this.ctx.request.header.appid,
        Cookie: this.ctx.request.header.cookie
      };
      return requestConfig;
    });
    return instance
  }
};
