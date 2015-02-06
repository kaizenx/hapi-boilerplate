var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    fork  = require('child_process').fork;

gulp.task('default', ['styles', 'scripts', 'images', 'jscs', 'watch'], function() {

    /* initialize server */
    gutil.log('Starting', gutil.colors.cyan('node-dev'));

    var nodeDev = fork('./node_modules/node-dev/bin/node-dev', ['index.js'], { detached: true });

    /* do this, so app will not close instantly */
    process.stdin.resume();

    /* finish forked 'node-dev' on exit */
    process.on('SIGINT', function exitHandler() {

        gutil.log('Finishing', gutil.colors.cyan('node-dev'));

        nodeDev.kill();
        process.exit();
    });
});