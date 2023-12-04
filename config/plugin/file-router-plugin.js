const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');
let initialFlag = false;

/** 创建文件路由 */
const createFileRouter = ({ folder, output }) => {
  const files = fs.readdirSync(folder);
  const routes = files.map((file) => {
    const filePath = path.join(folder, file);
    const routeName = path.basename(file, path.extname(file));
    return {
      path: `/${routeName}`,
      component: filePath,
    };
  });
  const routerConfig = `export default ${JSON.stringify(routes)}`;
  const outputFilePath = path.resolve(output);
  fs.writeFileSync(outputFilePath, routerConfig);
};

class FileRouterPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.environment.tap('FileRouterPlugin', () => {
      if (initialFlag === false) {
        createFileRouter(this.options); // 首次编译先创建一次
        const watcher = chokidar.watch('src', {
          ignored: /node_modules/,
          ignoreInitial: true,
        });
        watcher.on('add', (path) => {
          console.log('新增文件:', path);
          createFileRouter(this.options);
        });
        watcher.on('unlink', (path) => {
          console.log('删除文件:', path);
          createFileRouter(this.options);
        });
      }
      initialFlag = true;
    });
  }
}

module.exports = FileRouterPlugin;
