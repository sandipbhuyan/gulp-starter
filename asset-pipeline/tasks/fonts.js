import config from '../config';
import cache from 'gulp-cached';
import gulp from 'gulp';
import path from 'path';
import gulpIf from 'gulp-if';
import { bs } from './browser-sync';
import flatten from 'gulp-flatten';

const paths = {
  src: path.join(config.SRC_DIR, config.fonts.src, config.fonts.glob),
  dest: path.join(config.DEST_DIR, config.fonts.dest)
};

gulp.task('fonts', () => {
  return gulp.src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.fonts.cacheName, { optimizeMemory: true })))
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
