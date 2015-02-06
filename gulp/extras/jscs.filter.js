var gutil = require('gulp-util');

module.exports = function(error) {

    gutil.log(
        gutil.colors.red('JSCS:'), error.message,
        'in', gutil.colors.magenta(error.filename),
        'at line', gutil.colors.cyan(error.line)
    );

    return false;
}