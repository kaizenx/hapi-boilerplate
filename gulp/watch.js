var gulp        = require('gulp'),
    livereload  = require('gulp-livereload');

var config          = require('config');
var staticPathDev   = config.get('path.static.dev');
var staticPathDist  = config.get('path.static.dist');

gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch((staticPathDev + '/styles/**/*.scss'), ['styles']);

    // Watch .js files
    gulp.watch((staticPathDev + '/scripts/**/*.js'), ['scripts']);

    // Watch image files
    gulp.watch((staticPathDev + '/images/**/*'), ['images']);


    gulp.watch(config.get('path.app') + '/**/*.js', ['jscs']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch([(staticPathDist + '/**')]).on('change', livereload.changed);

});