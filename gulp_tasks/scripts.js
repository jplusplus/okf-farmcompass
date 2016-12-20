const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const conf = require('../conf/gulp.conf');
const log = require('gulp-util').log;

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src(conf.path.src('**/*.js'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel().on('error', function(e){
      log(e);
      this.emit('end');
    }))
    .pipe(gulp.dest(conf.path.tmp()));
}
