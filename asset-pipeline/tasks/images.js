import config from '../config';
import cache from 'gulp-cached';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import path from 'path';
import gulpIf from 'gulp-if';
import { bs } from './browser-sync';
import flatten from 'gulp-flatten';

const paths = {
  src: path.join(config.SRC_DIR, config.images.src, config.images.glob),
  dest: path.join(config.DEST_DIR, config.images.dest)
};

gulp.task('images', () => {
  return gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.images.cacheName, { optimizeMemory: true })))
    .pipe(imagemin())
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
