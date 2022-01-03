const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8081,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        open: true,
    }
});