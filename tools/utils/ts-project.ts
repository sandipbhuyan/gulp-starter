import * as ts from 'gulp-typescript';

export default function tsProject() {
  return ts.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
}
