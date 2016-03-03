import config from '../config';
import * as gulp from 'gulp';
import { join } from 'path';
import * as eslint from 'gulp-eslint';
import * as cache from 'gulp-cached';
import * as gulpIf from 'gulp-if';

const paths = {
  src: join(config.SRC_DIR, config.jsLint.src, config.jsLint.glob)
};

gulp.task('js-lint', () => {
  gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.jsLint.cacheName)))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
