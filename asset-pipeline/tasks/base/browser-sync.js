import browserSync from 'browser-sync';
import gulp from 'gulp';
import {isProd, ROOT_DIR} from '../../config';
import {join} from 'path';

export const bs = browserSync.create();

gulp.task('browser-sync', () => {
  bs.init({

    // A, if you don't have a backend api use the built in server
    server: {
      baseDir: 'public'
    },

    // B, if you got a backend api proxy the request to it
    // proxy: 'some-vhost-of-existing-backend.api',

    // custom middleware for mock api
    middleware(req, res, next) {
      require(join(ROOT_DIR, 'api', 'api'))(req, res, next);
    },

    // default port
    port: isProd ? 8080 : 3000,

    // disable notify popup
    notify: false,

    // do not open browser on start
    open: false,

    // disable UI completely
    ui: false
  });
});
