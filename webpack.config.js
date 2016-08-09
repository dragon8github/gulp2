var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
       entry:{
        main:'./src/js/main.js',
        user:['./src/js/login.js','./src/js/regin.js'],
        index:['./src/js/index.js']
    },
    output: {
        path: __dirname + '/build/js',  //输出文件夹
        filename:'[name].js'   //最终打包生成的文件名,但如果写为‘[name].js’ 表示将entry各自生成不合并
    },
    module:{
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }　
        ]
    },
    plugins:[
        //动态将上面编译好的js文件导入到以下html文件中并且生成到指定目录
        new HtmlWebpackPlugin({
             filename:__dirname + '/build/html/login.html', 
             template:__dirname + '/src/tpl/login.html',
             hash:true,
             inject:"body",
             chunks:['user']  
        }),
         //动态将上面编译好的js文件导入到以下html文件中并且生成到指定目录
        new HtmlWebpackPlugin({
             filename:__dirname + '/build/html/index.html', 
             template:__dirname + '/src/tpl/index.html',
             hash:true,
             inject:"body",
             chunks:['index']  
        }),
        new webpack.ProvidePlugin({
            $:'jquery'   //全局自动加载jquery
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:"user",  //对应entry的对象名称
        //     filename:"user.js"
        // })
        ]
    }