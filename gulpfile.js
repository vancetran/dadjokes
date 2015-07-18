var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),

  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/dev/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/dev/*.html')
});

// Styles
gulp.task('styles', function () {

  return sass('builds/dev/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('builds/dev/styles/'))
    //.pipe(sourcemaps('.'))

    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('builds/prod/styles/'))
    // .pipe(notify({ message: 'Styles task complete' }))
    ;
});

gulp.task('watch', function() {
  gulp.watch('builds/dev/js/**/*', ['js']);
  gulp.watch('builds/dev/styles/*.scss', ['styles']);
  gulp.watch(['builds/dev/*.html',
    'builds/dev/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/dev/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'styles', 'webserver']);
