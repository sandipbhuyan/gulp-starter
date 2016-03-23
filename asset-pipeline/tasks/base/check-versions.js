import gulp from 'gulp';
import {checkVersions} from '../../config';
import {exec} from 'child_process';
import semver from 'semver';
import chalk from 'chalk';
import {isNull} from 'lodash';

function reportError(message) {
  console.error(chalk.white.bgRed.bold(message));
  process.exit(1);
}

gulp.task('check-versions', (cb) => {
  exec('npm --version', (error, stdout, stderr) => {
    if (!isNull(error)) {
      reportError('npm preinstall error: ' + error + stderr);
    }

    if (!semver.gte(stdout, checkVersions.npm)) {
      reportError('NPM is not in required version! Required is ' + checkVersions.npm + ' and you\'re using ' + stdout);
    }
  });

  exec('node --version', (error, stdout, stderr) => {
    if (!isNull(error)) {
      reportError('npm preinstall error: ' + error + stderr);
    }

    if (!semver.gte(stdout, checkVersions.node)) {
      reportError('NODE is not in required version! Required is ' + checkVersions.node + ' and you\'re using ' + stdout);
    }
  });

  cb();
});
