var tsc = require('gulp-typescript');
var gulp = require('gulp');

gulp.task('tsc', function () {
  return gulp.src('src/app/**/*.ts')
    .pipe(tsc({
      noImplicitAny: true,
      out: 'app.build.js'
    }))
    .pipe(gulp.dest('www/js'));
});
