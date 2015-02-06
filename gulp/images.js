var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    imagemin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    notify      = require('gulp-notify');

var config = require('config');

gulp.task('images', ['clean'], function() {
    return gulp.src((config.get('path.static.dev') + '/images/**/*'))
        .pipe(plumber())
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest((config.get('path.static.dist') + '/images')))
        .pipe(notify({ message: 'Images task complete' }));
});