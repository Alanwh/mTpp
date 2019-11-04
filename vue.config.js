const path = require('path');
// const apiRoutes = require('./mock');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    runtimeCompiler: true,
    //允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: (config) => {
        //命名 
        config.resolve.alias
        .set('styles', resolve('src/assets/styles'))
        .set('common', resolve('src/common'))
        //打包文件带hash
        config.output.filename('[name].[hash].js').end(); 
    },
    devServer: {
        // open: true, 
        host: '10.93.147.21'
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:8080',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/mock'
        //         }
        //     },
        // },
        // before(app) {
        //     app.use('/api', apiRoutes)
        // }
    }
}