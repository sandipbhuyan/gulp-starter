import config from '../config';
import * as gulp from 'gulp';
import { join } from 'path';
import * as rev from 'gulp-rev';
import * as revNapkin from 'gulp-rev-napkin';

const paths = {
  src: join(config.DEST_DIR, config.rev.assets.glob),
  dest: config.DEST_DIR,
  manifest: join(config.DEST_DIR, config.rev.manifestFile)
};

gulp.task('rev-assets', () => {
  // Ignore files that may reference assets. We'll rev them in another task.
  const ignoreThese = `!${join(paths.dest, config.rev.assets.ignoreGlob)}`;

  return gulp
    .src([paths.src, ignoreThese])
    .pipe(rev())
    .pipe(gulp.dest(paths.dest))
    .pipe(revNapkin({ verbose: false }))
    .pipe(rev.manifest(paths.manifest))
    .pipe(gulp.dest(''));
});
