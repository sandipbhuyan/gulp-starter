import config from '../config';
import * as cache from 'gulp-cached';
import * as gulp from 'gulp';
import { join } from 'path';
import * as gulpIf from 'gulp-if';
import { bs } from './browser-sync';
import * as flatten from 'gulp-flatten';

const paths = {
  src: join(config.SRC_DIR, config.fonts.src, config.fonts.glob),
  dest: join(config.DEST_DIR, config.fonts.dest)
};

gulp.task('fonts', () => {
  return gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.fonts.cacheName, { optimizeMemory: true })))
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
