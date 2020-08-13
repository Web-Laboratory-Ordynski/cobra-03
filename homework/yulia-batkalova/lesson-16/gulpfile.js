let gulp = require('gulp'),
    sass = require('gulp-sass');
browserSync = require('browser-sync');
pug = require('gulp-pug');
// notify = require('gulp-notify');

gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('pug', function () {
    return gulp.src('app/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app'))
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.pug', gulp.parallel('pug'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))


// gulp.task('notify', function () {
//     gulp.src("./src/test.ext")
//         .pipe(notify("Hello Gulp!"))
// });
