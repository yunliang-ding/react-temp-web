const Base = require('./base.js');

module.exports = class extends Base {
  async infoAction(){
    const { data } = await this.CenterServices().post('/user/userinfo');
    this.json(data)
  }
  async logoutAction(){
    const { data } = await this.CenterServices().post('/unification/logout')
    this.json(data)
  }
};
