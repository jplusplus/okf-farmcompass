const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject:all', gulp.series(gulp.parallel('styles', 'scripts'), 'inject'));
gulp.task('inject:styles', gulp.series('styles', 'inject'));
gulp.task('inject:scripts', gulp.series('scripts', 'inject'));
gulp.task('build', gulp.series('partials', gulp.parallel('inject:all', 'other'), 'build'));
gulp.task('deploy', gulp.series('build', 'deploy'));
gulp.task('data', gulp.series('data:all', 'data:meta', 'data:i18n', 'data:labels'));
gulp.task('serve', gulp.series('inject:all', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch([
    conf.path.src('index.html'),
    'bower.json'
  ], gulp.parallel('inject:all'));

  gulp.watch(conf.path.src('app/**/*.html'), gulp.series('partials', reloadBrowserSync));
  gulp.watch([
    conf.path.src('**/*.scss'),
    conf.path.src('**/*.css')
  ], gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('inject:scripts'));
  done();
}
