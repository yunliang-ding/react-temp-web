// 启动前端的服务
console.log('\x1B[32m%s\x1B[0m', '启动前端的服务')

require("child_process").execSync(`cd ./www; npm start`, {
  stdio: "inherit",
});

