import gulp from 'gulp';
import del from 'del';
import {DEST_DIR} from '../../config';

gulp.task('clean', (cb) => {
  console.log('project scope');
  del([DEST_DIR]).then(() => cb());
});
