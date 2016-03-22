import config from '../config';
import gulp from 'gulp';
import {join} from 'path';
import sizereport from 'gulp-sizereport';

const paths = {
  src: join(config.DEST_DIR, config.sizeReport.src, config.sizeReport.glob)
};

gulp.task('size-report', () => {
  return gulp
    .src([paths.src, config.sizeReport.ignoreGlob])
    .pipe(sizereport({ gzip: true }));
});
