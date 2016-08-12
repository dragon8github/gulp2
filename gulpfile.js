var gp = require('gulp');
var gulp_webpack = require('gulp-webpack');
var gulp_uglify = require('gulp-uglify');
var webpack = require('webpack');
var webpack_config = require('./webpack.config.js');

/*
gp.task('build-js',function()
{
	gulp_webpack(webpack_config,webpack)
	.pipe(gp.dest('./build/js'))
})
*/

gp.task('config',function(){
	var fs = require('fs');
	var config = {};
	var path = "./src/modules/";
	var modules = fs.readdirSync(path);
	modules.forEach( function(e, index) {
		if(e != ".DS_Store")  // 我也不知道为啥会有这东西- -#
		{
			var modules_files = fs.readdirSync(path + e);
			var file_arr = modules_files.map(function(f){
				return path + e + "/" + f;
			})
			config[e] = file_arr;
		}
	});
	// console.log(modules);
	// console.log(webpack_config.entry);
	// console.log(config);
	webpack_config.entry = config;
})

gp.task('run',['config'],function()
{
	webpack(webpack_config,function(){

	})
	/* gp.src(['./src/tpl/*.html'])
	.pipe(gp.dest('./build/html')); */
})