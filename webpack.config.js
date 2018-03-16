'use strict';
var path = require('path');

module.exports = {
    mode: 'development',
    // context: __dirname + '/src/app',
    devtool: 'source-map',
    entry: './src/app/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    devServer: {
        publicPath: '/',
        contentBase: './src/app',
        compress: true,
        port: 9000,
        hot: true
    }
};
