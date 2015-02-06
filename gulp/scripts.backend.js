var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    jscs        = require('gulp-jscs'),
    jshint      = require('gulp-jshint');

var config = require('config');

gulp.task('jscs', function() {
    return gulp.src(config.get('path.app') + '/**/*.js')
        .pipe(plumber())
        .pipe(jscs(config.get('jscs')))
        .pipe(jshint('.jshintrc'))
});
