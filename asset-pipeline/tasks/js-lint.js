import config from '../config';
import gulp from 'gulp';
import path from 'path';
import eslint from 'gulp-eslint';
import cache from 'gulp-cached';
import gulpIf from 'gulp-if';

const paths = {
  src: path.join(config.SRC_DIR, config.jsLint.src, config.jsLint.glob)
};

gulp.task('js-lint', () => {
  return gulp
    // TODO(tsm): Check why on earth this line can't ignore the node_module dir.
    // Ofc dont forget to use ROOT_DIR instead of SRC_DIR.
    // .src([paths.src, config.jsLint.ignoreGlob])
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.jsLint.cacheName)))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
