import config from '../config';
import * as gulp from 'gulp';
import { join } from 'path';
import * as sourcemaps from 'gulp-sourcemaps';
import * as plumber from 'gulp-plumber';
import tsProject from '../utils/ts-project';
import * as typescript from 'gulp-typescript';

const paths = {
  src: [
    'typings/browser.d.ts',
    'tools/manual-typings/**/*.d.ts',
    join(config.SRC_DIR, config.ts.src, config.ts.glob)
  ],
  dest: join(config.DEST_DIR, config.ts.dest)
};

gulp.task('ts', () => {
  return gulp
    .src(paths.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(typescript(tsProject()))
    .pipe(sourcemaps.write(config.isProd ? '.' : ''))
    .pipe(gulp.dest(paths.dest));
});
