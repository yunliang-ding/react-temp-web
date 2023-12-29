module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }
  openAction() {
    this.emit('opend', 'This client opened successfully!');
  }
  addUserAction() {
    console.log('获取客户端 addUser 事件发送的数据', this.wsData);
    setTimeout(() => {
      this.broadcast('add', this.wsData);
    }, 2000);
  }
};
