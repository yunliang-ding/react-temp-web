// default config
const isDev = think.env === 'development';

module.exports = {
  workers: 1,
  env: think.env,
  port: isDev ? 7001 : 7000,
};
