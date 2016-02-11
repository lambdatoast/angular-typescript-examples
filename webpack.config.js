var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: __dirname + '/src/app/app.ts'
    },

    output: {
        path: __dirname + '/www/js/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        loaders: [
            {test: /\.html$/, loader: 'ngtemplate!html-loader'},
            {test: /\.ts$/, loader: 'ts-loader', exclude: [/node_modules/, /test/]}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({title: 'examples', template: 'index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: '0.0.0.0'
    }
}
