const path = require('path');
const fs = require('fs-extra');
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
const output = path.resolve(__dirname, '../../src/.app/router.tsx');
const createFileRouter = async (
  ignorePaths = ['component/', 'components/'],
) => {
  const files = glob.sync(folder);
  const importArr = [];
  const routes = files
    .filter((file) => {
      return !ignorePaths.some((i) => file.includes(i));
    })
    .map((file) => {
      let filePath = file.split('/src/pages')[1];
      filePath = filePath.substring(0, filePath.lastIndexOf('.'));
      if (filePath.endsWith('/index')) {
        filePath = filePath.substring(0, filePath.length - 6); // 移除 index
      }
      const CompName = `${filePath
        .replaceAll('/', '')
        .replaceAll('$', '')
        .replaceAll(' ', '')}`.split('');
      // 字母开头
      if (/[a-zA-Z]/.test(CompName[0])) {
        CompName[0] = CompName[0].toUpperCase();
      } else {
        CompName.unshift('R');
      }
      importArr.push(`import ${CompName.join('')} from '@/pages${filePath}';`); // 添加依赖
      return {
        path: filePath.replaceAll('$', ':'),
        component: encodeStr(`<${CompName.join('')} />`),
      };
    });
  routerConfig = `export default ${decodeStr(JSON.stringify(routes, null, 2))}`;
  const content = `${importArr.join('\n')}\n\n${routerConfig}`;
  const outputFilePath = path.resolve(output);
  fs.removeSync(outputFilePath);
  await new Promise((res) => setTimeout(res, 100));
  fs.outputFile(outputFilePath, content);
};

class FileRouterPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.environment.tap('FileRouterPlugin', () => {
      if (initialFlag === false) {
        createFileRouter(this.options.ignorePaths); // 首次编译先创建一次
        const watcher = chokidar.watch('src/pages', {
          ignored: /node_modules/,
          ignoreInitial: true,
        });
        watcher.on('add', async (path) => {
          console.log('\x1B[32m%s\x1B[0m', `新增文件: ${path}`);
          createFileRouter(this.options.ignorePaths);
        });
        watcher.on('unlink', async (path) => {
          console.log('\x1B[31m%s\x1B[0m', `删除文件: ${path}`);
          createFileRouter(this.options.ignorePaths);
        });
      }
      initialFlag = true;
    });
  }
}

module.exports = FileRouterPlugin;
