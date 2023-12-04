const path = require('path');
const fs = require('fs');
const glob = require('glob');
const chokidar = require('chokidar');
const encodeStr = (str) => {
  return `#_#${str}#_#`;
};
const decodeStr = (str) => {
  return str.replaceAll('"#_#', '').replaceAll('#_#"', '');
};
let initialFlag = false;
/** 创建文件路由 */
const folder = path.resolve(__dirname, '../../src/pages/**/*.tsx');
const output = path.resolve(__dirname, '../../src/.router.tsx');
const createFileRouter = (ignorePaths = ['component/', 'components/']) => {
  const files = glob.sync(folder);
  const importArr = [];
  const routes = files
    .filter((file) => {
      return !ignorePaths.some((i) => file.includes(i));
    })
    .map((file) => {
      const routeName = path.basename(file, path.extname(file));
      let filePath = file.split('/src/pages')[1];
      filePath = filePath.substring(0, filePath.lastIndexOf('.'));
      if (filePath.endsWith('/index')) {
        filePath = filePath.substring(0, filePath.length - 6); // 移除 index
      }
      const CompName = `R${filePath.replaceAll('/', '')}`;
      importArr.push(`import ${CompName} from '@/pages${filePath}';`); // 添加依赖
      return {
        path: filePath,
        component: encodeStr(`<${CompName} />`),
      };
    });
  routerConfig = `export default ${decodeStr(JSON.stringify(routes, null, 2))}`;
  const outputFilePath = path.resolve(output);
  fs.writeFileSync(
    outputFilePath,
    `${importArr.join('\n')}\n\n${routerConfig}`,
  );
};

createFileRouter(['schema-', 'component/', 'components/']);

class FileRouterPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.environment.tap('FileRouterPlugin', () => {
      if (initialFlag === false) {
        createFileRouter(this.options.ignorePaths); // 首次编译先创建一次
        const watcher = chokidar.watch('src', {
          ignored: /node_modules/,
          ignoreInitial: true,
        });
        watcher.on('add', (path) => {
          console.log('新增文件:', path);
          createFileRouter(this.options.ignorePaths);
        });
        watcher.on('unlink', (path) => {
          console.log('删除文件:', path);
          createFileRouter(this.options.ignorePaths);
        });
      }
      initialFlag = true;
    });
  }
}

module.exports = FileRouterPlugin;
