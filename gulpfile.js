gulp = require('gulp');

gulp.task('hello world', () => {
    console.log('hello world');
});

gulp.task('default', [ 'hello world' ]);