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




gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});

//Watch task
gulp.task('watch',function() {
return gulp.watch('scss/**/*.scss',gulp.series('sass'));
});

//Default task
gulp.task('default', gulp.parallel('svgstore', 'sass'));
