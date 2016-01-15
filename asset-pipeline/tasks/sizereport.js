import config from '../config';
import gulp from 'gulp';
import repeatString from '../lib/repeatString';
import sizereport from 'gulp-sizereport';

gulp.task('size-report', () => {
  const hashedFiles = '/**/*-' + repeatString('[a-z,0-9]', 8) + '*.*';

  return gulp.src([config.DEST_DIR + hashedFiles, '*!' + config.rev.manifestFile])
    .pipe(sizereport({ gzip: true }));
});
