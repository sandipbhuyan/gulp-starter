import config from '../config';
import * as cache from 'gulp-cached';
import * as gulp from 'gulp';
import { join } from 'path';
import * as gulpIf from 'gulp-if';
import { bs } from './browser-sync';

const paths = {
  src: join(config.SRC_DIR, config.assets.src, config.assets.glob),
  dest: join(config.DEST_DIR, config.assets.dest)
};

gulp.task('assets', () => {
  gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.assets.cacheName, { optimizeMemory: true })))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
