import * as gulp from 'gulp';
import * as del from 'del';
import config from '../config';

gulp.task('clean', (cb) => {
  del([config.DEST_DIR]).then(() => cb());
});
