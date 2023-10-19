const Koa = require('koa')
const static = require('koa-static')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const koaWebpack = require('koa-webpack')
const {
  resolve
} = require('path')

const app = new Koa()

async function start() {
  const compiler = webpack(config)
  try {
    const middleware = await koaWebpack({
      compiler,
      hotClient: {
        // host: '10.0.4.15'
      }
    })
    app.use(middleware)
    app.use(static(resolve(__dirname, './public')))
    app.listen(3000, () => {
      console.log('run 3000')
    })
  } catch (e) {
    console.log(e)
  }
}
start()