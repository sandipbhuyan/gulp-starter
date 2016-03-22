import config from '../config';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', (cb) => {
  runSequence(
    'clean',
    [
      'html',
      'assets',
      'fonts',
      'images',
      'css',
      'js'
    ],
    'watch',
    cb);
});

gulp.task('prod', (cb) => {
  runSequence(
    'clean',
    [
      'js-lint',
      'css-lint'
    ],
    [
      'html',
      'fonts',
      'images',
      'css',
      'js'
    ],
    'rev-assets',
    'rev-update-references',
    'assets',
    'size-report',
    cb);
});

gulp.task('default', [config.isProd ? 'prod' : 'dev']);
