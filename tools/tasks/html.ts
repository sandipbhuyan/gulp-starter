import config from '../config';
import * as cache from 'gulp-cached';
import * as gulp from 'gulp';
import { join } from 'path';
import * as gulpIf from 'gulp-if';
import { bs } from './browser-sync';

const paths = {
  src: join(config.SRC_DIR, config.html.src, config.html.glob),
  dest: join(config.DEST_DIR, config.html.dest)
};

gulp.task('html', () => {
  return gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.html.cacheName, { optimizeMemory: true })))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
