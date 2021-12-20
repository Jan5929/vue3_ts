// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path') // 引入path模块
function resolve (dir: string) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  chainWebpack: (config:any) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  },
  devServe: {
    open: true,
    host: '0.0.0.0',
    port: 8080
  }
}
