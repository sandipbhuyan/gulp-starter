import config from '../config';
import cache from 'gulp-cached';
import gulp from 'gulp';
import path from 'path';
import gulpIf from 'gulp-if';
import { bs } from './browser-sync';

const paths = {
  src: path.join(config.SRC_DIR, config.html.src, config.html.glob),
  dest: path.join(config.DEST_DIR, config.html.dest)
};

gulp.task('html', () => {
  return gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.html.cacheName, { optimizeMemory: true })))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
