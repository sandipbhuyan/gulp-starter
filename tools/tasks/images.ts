import config from '../config';
import * as cache from 'gulp-cached';
import * as gulp from 'gulp';
import * as imagemin from 'gulp-imagemin';
import { join } from 'path';
import * as gulpIf from 'gulp-if';
import { bs } from './browser-sync';
import * as flatten from 'gulp-flatten';

const paths = {
  src: join(config.SRC_DIR, config.images.src, config.images.glob),
  dest: join(config.DEST_DIR, config.images.dest)
};

gulp.task('images', () => {
  gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.images.cacheName, { optimizeMemory: true })))
    .pipe(imagemin())
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
