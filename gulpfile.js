const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('hello world', () => {
    console.log('hello world');
});

gulp.task('react', () => {
    console.log('gulping up the react components!...standbye');
    return gulp.src('src/components/**/**/*.js')        
        .pipe(babel({
            presets: ['es2015', 'react', 'stage-0']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    console.log('gulping up the css modules!...standbye');
    return gulp.src('src/components/**/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', [ 'react', 'css' ]);