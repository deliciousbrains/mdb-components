var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var rename = require("gulp-rename");

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
