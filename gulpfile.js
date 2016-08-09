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

gp.task('run',function()
{
  webpack(webpack_config,function(){
  	
  })
	/* gp.src(['./src/tpl/*.html'])
	   .pipe(gp.dest('./build/html')); */
})