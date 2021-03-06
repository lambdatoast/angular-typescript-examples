var tsc = require('gulp-typescript');
var gulp = require('gulp');
var vendorSources = require('main-bower-files');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var serve = require('gulp-serve');

gulp.task('serve', serve({
	root: ['www'],
	port: 3001
}));

gulp.task('build', ['tsc', 'vendor', 'templates']);
 
gulp.task('templates', function () {
  return gulp.src('src/**/*.html')
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest('www/js'));
});

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
