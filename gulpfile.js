var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var rename = require("gulp-rename");
var sass = require('gulp-sass');

gulp.task('svgstore', function () {
    return gulp
        .src('img/**/*.svg' )
        .pipe( svgmin( {
    			plugins: [
    				{ removeViewBox: false },
    				{ removeUselessStrokeAndFill: true },
    				{ removeEmptyAttrs: false },
    				{ removeUnknownsAndDefaults: false },
    				{ cleanupIDs: false },
    				{ removeUselessStrokeAndFill: true }
    			]
    		} ) )
        .pipe(svgstore())
        .pipe( rename( 'icons.svg' ) )
        .pipe(gulp.dest('img/'))
});

function style() {
  //1. where is my scss file
  return gulp.src('./scss/**/*.scss')
  //2. pass that file through sass compiler
  .pipe(sass())
  //3. where do i save the compiled css?
  .pipe(gulp.dest('./css'))
}

exports.style = style;
