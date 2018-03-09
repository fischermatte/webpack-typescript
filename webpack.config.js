'use strict';

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        filename: "bundle.js"
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
    }
};
