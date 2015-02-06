var gulp = require('gulp'),
    del = require('del');

var config = require('config');

/* directories to be cleaned before build */
var dirs = [];

/* base path for dist assets */
var basePath = config.get('path.static.dist') + '/';

dirs.push(basePath + 'images');
dirs.push(basePath + 'scripts');
dirs.push(basePath + 'styles');

gulp.task('clean', function(cb) {
    del(dirs, cb)
});