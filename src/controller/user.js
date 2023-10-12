const Base = require("./base.js");

module.exports = class extends Base {
  async infoAction() {
    const { data } = await this.CenterServices({
      method: "post",
      url: "/user/userinfo",
    });
    this.json(data);
  }
  async logoutAction() {
    const { appid } = this.ctx.request.header;
    const { data } = await this.CenterServices({
      method: "post",
      url: "/unification/logout",
    });
    if (data.code === 200) {
      // 注销客户端cookie
      this.cookie(`app_auth_${appid}`, null, {
        domain: ".yunliang.cloud",
      });
    }
    this.json(data);
  }
};
