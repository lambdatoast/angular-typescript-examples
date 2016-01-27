var tsc = require('gulp-typescript');
var gulp = require('gulp');

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
