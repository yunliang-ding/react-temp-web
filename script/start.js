// 启动前端的服务
const { port } = require('../www/build.json')

require("child_process").execSync(`cd ./www; npm start`, {
  // 遇到服务起不来，可开启下面属性，查看控制台打印信息
  // stdio: "inherit",
});
