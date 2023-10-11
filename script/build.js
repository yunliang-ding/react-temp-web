const { execSync } = require("child_process")

// 构建前端
console.log('\x1B[32m%s\x1B[0m', '开始构建前端服务')

execSync('cd ./www; npm run build', {
  stdio: "inherit",
});

// 服务部署
console.log('\x1B[32m%s\x1B[0m', '开始pm2服务部署')

execSync('pm2 startOrReload pm2.json', {
  stdio: "inherit",
});
