import config from '../config';
import * as gulp from 'gulp';
import { join } from 'path';
import * as cache from 'gulp-cached';
import * as gulpIf from 'gulp-if';
import * as postcss from 'gulp-postcss';
import * as reporter from 'postcss-reporter';
import * as scss from 'postcss-scss';
import * as stylelint from 'stylelint';
import * as doiuse from 'doiuse';
import * as colorguard from 'colorguard';
import * as filterStream from 'postcss-filter-stream';

const paths = {
  src: join(config.SRC_DIR, config.cssLint.src, config.cssLint.glob)
};

const processors = [
  doiuse({
    browsers: config.css.autoprefixerBrowsers,
    ignoreFiles: [config.cssLint.ignoreGlob]
  }),
  filterStream(config.cssLint.ignoreGlob, colorguard()),
  stylelint(),
  reporter({ clearMessages: true })
];

gulp.task('css-lint', () => {
  return gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.cssLint.cacheName)))
    .pipe(postcss(processors, { syntax: scss }));
});
