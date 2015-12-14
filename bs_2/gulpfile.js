/**
 * Created by markgrover on 12/13/15.
 */
var gulp = require('gulp');

var sass = require('gulp-sass');
var sassFile = 'styles/sass/style.sass';
var cssFile = 'styles/build/';
var jade = require('gulp-jade');

gulp.task('sass', function(){
    gulp.src(sassFile)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssFile));
});

gulp.task('watch', function() {
   gulp.watch(sassFile,['sass']);
});
