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
import url from 'postcss-url';

const paths = {
  src: path.join(config.SRC_DIR, config.css.src, config.css.glob),
  dest: path.join(config.DEST_DIR, config.css.dest)
};

const processors = [
  autoprefixer({
    browsers: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ]
  }),
  url({
    url(imageUrl) {
      let transformedUrl = imageUrl;
      // urls which reference data: don't need to be transformed since they reference static rather than a path.
      if (/(.*?)\.(png|jpg|jpeg|gif|bmp|svg)$/.test(imageUrl)) {
        transformedUrl = '../images/' + imageUrl.split('/').pop();
      }

      return transformedUrl;
    }
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
