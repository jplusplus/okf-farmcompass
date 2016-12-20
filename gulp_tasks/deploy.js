const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*').pipe(ghPages({
    remoteUrl: 'git@github.com:jplusplus/okf-farmcompass.git'
  }));
});
