var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
         app: ['./src/js/index.js']
     },
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].bundle.js'
     },
     module: {
         rules: [
             {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader'
             }
         ]
     }
 };