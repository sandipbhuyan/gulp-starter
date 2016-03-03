import config from '../config';
import * as gulp from 'gulp';
import { join } from 'path';
import * as tslint from 'gulp-tslint';
import * as tslintStylish from 'tslint-stylish';
import * as cache from 'gulp-cached';
import * as gulpIf from 'gulp-if';

const paths = {
  src: join(config.ROOT_DIR, config.tsLint.src, config.tsLint.glob)
};

gulp.task('ts-lint', () => {
  return gulp
    .src([paths.src, ...config.tsLint.ignoreGlob])
    .pipe(gulpIf(config.isDev, cache(config.tsLint.cacheName)))
    .pipe(tslint())
    .pipe(tslint.report(tslintStylish, {
      emitError: false,
      bell: false
    }));
});
