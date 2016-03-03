import config from '../config';
import * as gulp from 'gulp';
import repeatString from '../lib/repeatString';
import * as sizereport from 'gulp-sizereport';

gulp.task('size-report', () => {
  const hashedFiles = `/**/*-${repeatString('[a-z,0-9]', 8)}*.*`;

  gulp
    .src([config.DEST_DIR + hashedFiles, `*!${config.rev.manifestFile}`])
    .pipe(sizereport({ gzip: true }));
});
