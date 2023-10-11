// 安装前端的依赖
console.log('\x1B[32m%s\x1B[0m', '安装前端的依赖')

require("child_process").execSync("cd ./www; cnpm install", {
  stdio: "inherit",
});
