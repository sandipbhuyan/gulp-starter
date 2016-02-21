import config from '../config';
import gulp from 'gulp';
import path from 'path';
import revReplace from 'gulp-rev-replace';

const paths = {
  src: path.join(config.DEST_DIR, config.rev.updateReferences.glob),
  dest: config.DEST_DIR,
  manifest: path.join(config.DEST_DIR, config.rev.manifestFile)
};

gulp.task('rev-update-references', () => {
  gulp
    .src(paths.src)
    .pipe(revReplace({ manifest: gulp.src(paths.manifest) }))
    .pipe(gulp.dest(paths.dest));
});
