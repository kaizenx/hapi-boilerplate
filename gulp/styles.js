var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-ruby-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifycss       = require('gulp-minify-css'),
    notify          = require('gulp-notify'),
    rename          = require('gulp-rename');

var config = require('config');

gulp.task('styles', ['clean'], function() {
    return gulp.src((config.get('path.static.dev') + '/styles/main.scss'))
        .pipe(plumber())
        .pipe(sass({ style: 'expanded', "sourcemap=none": true }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest((config.get('path.static.dist') + '/styles')))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest((config.get('path.static.dist') + '/styles')))
        .pipe(notify({ message: 'Styles task complete' }));
});