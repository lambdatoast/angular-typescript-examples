var tsc = require('gulp-typescript');
var gulp = require('gulp');
var vendorSources = require('main-bower-files');
var concat = require('gulp-concat');

gulp.task('build', ['tsc', 'vendor']);

gulp.task('vendor', function () {
  return gulp.src(vendorSources())
    .pipe(concat('vendor.build.js'))
    .pipe(gulp.dest('www/js'));
});

gulp.task('tsc', function () {
  var sources = [
    'typings/**/*.ts',
    'src/app/**/*.ts'
  ];
  return gulp.src(sources)
    .pipe(tsc({
      noImplicitAny: true,
      out: 'app.build.js'
    }))
    .pipe(gulp.dest('www/js'));
});
