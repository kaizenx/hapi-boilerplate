var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    notify      = require('gulp-notify'),
    rename      = require('gulp-rename'),
    jscs        = require('gulp-jscs'),
    concat      = require('gulp-concat');

var config = require('config');

gulp.task('scripts', ['clean'], function() {
    return gulp.src((config.get('path.static.dev') + '/scripts/**/*.js'))
        .pipe(plumber())
        .pipe(jscs(config.get('jscs')))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest((config.get('path.static.dist') + '/scripts')))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest((config.get('path.static.dist') + '/scripts')))
        .pipe(notify({ message: 'Scripts task complete' }));
});