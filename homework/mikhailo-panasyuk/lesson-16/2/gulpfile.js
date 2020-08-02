const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concatCss = require('gulp-concat-css');

sass.compiler = require('node-sass');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    browserSync.watch('src' , browserSync.reload);
    browserSync.watch('dist' , browserSync.reload);
});

gulp.task('concatcss', function () {
    return gulp.src(['src/css/**/*.css' , '!src/css/style.css'])
      .pipe(concatCss("style.css"))
      .pipe(gulp.dest('src/css/'));
  });

gulp.task("autoprefixer", function () {
    return gulp.src('src/css/style.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 6 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass' , gulp.series('sass'));
    gulp.watch('src/css/style.css'  ,  gulp.series('autoprefixer'));
    gulp.watch(['src/css/**/*.css' , '!src/css/style.css']  ,  gulp.series('concatcss'));
});

gulp.task('default' , gulp.series(
    gulp.series('sass' , 'concatcss' , 'autoprefixer' ),
    gulp.parallel('watch', 'serve')
));

// Create all folder when start project
gulp.task('startProject', function(){
    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('./src'))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('./dist/img'))
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(gulp.dest('./src/css'))
        .pipe(gulp.dest('./src/fonts'))
        .pipe(gulp.dest('./src/img'))
        .pipe(gulp.dest('./src/js'))
        .pipe(gulp.dest('./src/sass'));
});