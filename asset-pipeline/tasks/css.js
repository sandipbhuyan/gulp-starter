import config from '../config';
import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import cssnano from 'cssnano';
import gulpIf from 'gulp-if';
import { bs } from './browser-sync';
import cache from 'gulp-cached';
import progeny from 'gulp-progeny';
import flatten from 'gulp-flatten';
import assets from 'postcss-assets';
import cssnext from 'postcss-cssnext';

const paths = {
  src: path.join(config.SRC_DIR, config.css.src, config.css.glob),
  dest: path.join(config.DEST_DIR, config.css.dest)
};

const processors = [
  cssnext(),
  autoprefixer({
    browsers: config.css.autoprefixerBrowsers
  }),
  assets({
    basePath: config.DEST_DIR,
    loadPaths: config.css.postCSSAssetsLoadPaths
  })
];

if (config.isProd) processors.push(cssnano({ discardComments: { removeAll: true } }));

// because there is no ide integration (WebStorm) i have to run the linter before each stylesheets task
// https://github.com/sasstools/sass-lint/issues/460
const preTasks = (!config.cssLint.ideSupport && config.isDev) ? ['css-lint'] : [];

gulp.task('css', preTasks, () => {
  return gulp.src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.css.cacheName)))
    .pipe(gulpIf(config.isDev, progeny()))
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: ['./node_modules/'] }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write(config.isProd ? '.' : ''))
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest))
    // If you generate source maps to a separate `.map` file you need to add `{match: '**/*.css'}` option to stream.
    // These files end up being sent down stream and when browserSync.stream() receives them, it will attempt
    // a full page reload (as it will not find any .map files in the DOM).
    .pipe(gulpIf(config.isDev, bs.stream()));
});
