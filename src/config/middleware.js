const path = require('path');
const isDev = think.env === 'development';
const cors = require("@koa/cors");

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: true,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(build|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router',
    options: {}
  },
  {
    handle: cors,
    options: {
      origin: function (ctx) {
        if(ctx.isWebsocket){
          return '.yunliang-ding.com'
        } else {
          return ctx.request.header.origin;
        }
      },
      allowMethods: "GET,POST,PUT,DELETE",
      allowHeaders: "appid, appkey, content-type",
      credentials: true,
    },
  },
  'logic',
  'controller'
];
