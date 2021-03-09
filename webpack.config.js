const path = require('path');
const root = path.resolve(__dirname);
const devPort = 9000;
const isProd = 'production' === process.env['NODE_ENV'] ? true : false;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(root, 'out'),
        filename: '[name].js'
    },

    // DevServer
    devServer: {
        port: devPort,
        progress: true,
        contentBase: false,
        compress: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets',
                to: './assets',
                globOptions: {
                    ignore: [
                        "**/dump/**",
                        "**/.gitkeep",
                        "**/*.js",
                        "**/*.py"
                    ]
                }
            }]
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html", // 模板HTML文件路径
            filename: "index.html",     // 打包后HTML文件名称
            minify: {                   // 优化操作
                removeAttributeQuotes: true,    // 删除多余的双引号
                collapseWhitespace: true,       // 删除换行
            }
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${devPort}/`
        }),
    ],

    // Typescript
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
        ]
    }
}