const webpack = require("webpack");
const path = require("path");
const nodeModules = path.join(__dirname, "node_modules");

module.exports = {
    entry  : "./app/index.js",
    output : {
        filename   : "[name].bundle.js",
        path       : "./dist/",
        publicPath : "/dist/"
    },
    module: {
        loaders: [
            {
                test    : /\.js[x]?$/,
                exclude : /node_modules/,
                // 此处去掉e3ify插件
                // 因为e3ify未开启source-map功能
                // 所以开发阶段就先不开启
                // loader  : "es3ify!babel-loader?presets[]=es2015&presets[]=react"
                loader  : "babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react"
            }
        ]
    },
    // 开启source-map模式
    // webpack对应7种开启方式,下面这一种是比较广泛的
    // 其他的可自行google了解
    // devtool : "cheap-module-eval-source-map",
    // 开启devServer
    // 开启hot-replacement
    // proxy webpack自带的转发服务
    devServer: {
        hot    : true,
        inline : true
    }

};
