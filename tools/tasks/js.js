import config from '../config';
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import handleErrors from '../utils/handleErrors';
import _ from 'lodash';
import path from 'path';
// import hmr from 'browserify-hmr';
import { bs } from './browser-sync';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';

const paths = {
  src: path.join(config.SRC_DIR, config.js.src, config.js.fileName),
  dest: path.join(config.DEST_DIR, config.js.dest)
};

const preTasks = (!config.jsLint.ideSupport && config.isDev) ? ['js-lint'] : [];

const options = {
  debug: true,
  noParse: config.js.noParse,
  entries: [paths.src],
  paths: [
    path.join(config.ROOT_DIR, 'node_modules'),
    path.join(config.ROOT_DIR, 'src')
  ],
  extensions: config.js.extensions
};

if (config.isDev) _.extend(options, watchify.args);

let bundler = browserify(options);

bundler.transform(babelify);
// bundler.transform(hmr);

if (config.isDev) {
  bundler = watchify(bundler);
  bundler.on('update', () => gulp.start('js'));
}

function bundle() {
  return bundler
    .bundle()
    .on('error', handleErrors)
    .pipe(source(config.js.bundleName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpIf(config.isProd, uglify()))
    .pipe(sourcemaps.write(config.isProd ? '.' : ''))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream({ once: true })));
}

gulp.task('js', preTasks, () => bundle());
