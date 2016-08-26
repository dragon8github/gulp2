var gp = require('gulp');
var gulp_webpack = require('gulp-webpack');
var gulp_uglify = require('gulp-uglify');
var webpack = require('webpack');
var webpack_config = require('./webpack.config.js');

//动态配置entry属性
gp.task('config',function(){
	var fs = require('fs');
	var config = {};
	var path = "./src/modules/";
	var modules = fs.readdirSync(path);
	modules.forEach( function(e, index) 
	{
		if(e != ".DS_Store") 
		{
			var modules_files = fs.readdirSync(path + e);
			var file_arr = modules_files.map(function(f){
				return path + e + "/" + f;
			})
			config[e] = file_arr;
		}
	});
	// console.log(modules);console.log(webpack_config.entry);console.log(config);
	webpack_config.entry = config;
})

gp.task('run',['config'],function()
{
	//获取动态json数据
	var req = require('request');
	var fs = require('fs');
	req.get("http://localhost/hot.php",function(err,rep,body){
		 fs.writeFileSync('./src/remote/hot.json', body);//console.log(body);
	});



	//加载webpack
	webpack(webpack_config,function(){

	})
	/* gp.src(['./src/tpl/*.html'])
	.pipe(gp.dest('./build/html')); */
})