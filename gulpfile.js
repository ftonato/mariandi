const
    gulp     = require('gulp'),
    rename   = require('gulp-rename'),
    minify   = require('gulp-minify-css')
    imagemin = require('gulp-imagemin'),
    sass	 = require('gulp-sass');

gulp.task('images', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/img/*', ['images']);
});

gulp.task('default', ['sass', 'images']);
