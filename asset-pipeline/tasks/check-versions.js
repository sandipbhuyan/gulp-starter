import gulp from 'gulp';
import config from '../config';
import {exec} from 'child_process';
import semver from 'semver';
import chalk from 'chalk';

function reportError(message) {
  console.error(chalk.white.bgRed.bold(message));
  process.exit(1);
}

gulp.task('check-versions', (cb) => {
  exec('npm --version', (error, stdout, stderr) => {
    if (error !== null) {
      reportError('npm preinstall error: ' + error + stderr);
    }

    if (!semver.gte(stdout, config.checkVersions.npm)) {
      reportError('NPM is not in required version! Required is ' + config.checkVersions.npm + ' and you\'re using ' + stdout);
    }
  });

  exec('node --version', (error, stdout, stderr) => {
    if (error !== null) {
      reportError('npm preinstall error: ' + error + stderr);
    }

    if (!semver.gte(stdout, config.checkVersions.node)) {
      reportError('NODE is not in required version! Required is ' + config.checkVersions.node + ' and you\'re using ' + stdout);
    }
  });

  cb();
});
