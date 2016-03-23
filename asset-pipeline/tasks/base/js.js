import {isDev, isProd, SRC_DIR, DEST_DIR, ROOT_DIR, js, jsLint} from '../../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import {join} from 'path';
// import hmr from 'browserify-hmr';
import {bs} from './browser-sync';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';

const paths = {
  src: join(SRC_DIR, js.src, js.fileName),
  dest: join(DEST_DIR, js.dest)
};

const preTasks = (!jsLint.ideSupport && isDev) ? ['js-lint'] : [];

const options = {
  debug: true,
  noParse: js.noParse,
  entries: [paths.src],
  paths: [
    join(ROOT_DIR, 'node_modules'),
    join(ROOT_DIR, 'src')
  ],
  extensions: js.extensions
};

if (isDev) Object.assign({}, options, watchify.args);

let bundler = browserify(options);

bundler.transform(babelify);
// bundler.transform(hmr);

if (isDev) {
  bundler = watchify(bundler);
  bundler.on('update', () => gulp.start('js'));
}

function bundle() {
  return bundler
    .bundle()
    .pipe(plumber())
    .pipe(source(js.bundleName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpIf(isProd, uglify()))
    .pipe(sourcemaps.write(isProd ? '.' : ''))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(isDev, bs.stream({ once: true })));
}

gulp.task('js', preTasks, () => bundle());
