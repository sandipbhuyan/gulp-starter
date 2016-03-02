import config from '../config';
import gulp from 'gulp';
import path from 'path';
import watch from 'gulp-watch';
import _ from 'lodash';

gulp.task('watch', ['browser-sync'], () => {
  // javascript wathing handled in the javascripts task
  const watchableTasks = ['html', 'assets', 'fonts', 'images', 'css'];

  _.forEach(watchableTasks, (taskName) => {
    const task = config[taskName];
    if (!task) return;

    const source = path.join(config.SRC_DIR, task.src, task.glob);

    watch(source, () => gulp.start(taskName));
  });
});
