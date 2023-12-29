const Application = require('thinkjs');
const watcher = require('think-watcher');

/** 创建实例 */
const instance = new Application({
  ROOT_PATH: __dirname,
  APP_PATH: `${__dirname}/src/apis`,
  env: 'development',
});

/** 监听 apis */
new watcher(
  {
    srcPath: `${__dirname}/src/apis`,
  },
  (fileInfo) => {
    instance._watcherCallBack(fileInfo);
  },
).watch();

instance.run(); // run server
