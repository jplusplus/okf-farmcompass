const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');
const fileFilter = filter(file => file.stat.isFile());

gulp.task('clean', clean);
gulp.task('bower', bower);
gulp.task('other', other);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function bower() {
  return gulp.src(path.join(conf.paths.bower, '/**/*.js'))
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, 'bower_components')));
}

function other() {

  return gulp.src([
    './**/*.swf',
    path.join(conf.paths.src, '/**/*'),
    path.join(conf.paths.bower, '/**/*.js'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
