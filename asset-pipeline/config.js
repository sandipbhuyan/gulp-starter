import path from 'path';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const ROOT_DIR = path.normalize(path.join(__dirname, '..'));

export default {
  isDev: argv.dev,
  isProd: argv.prod,

  ROOT_DIR,
  SRC_DIR: path.join(ROOT_DIR, 'src'),
  DEST_DIR: path.join(ROOT_DIR, 'public'),

  html: {
    src: '.',
    dest: '.',
    glob: '**/*.html',
    cacheName: 'html-task'
  },

  assets: {
    src: '.',
    dest: '.',
    glob: '{favicon.ico,robots.txt,sitemap.xml}',
    cacheName: 'assets-task'
  },

  js: {
    src: 'js',
    dest: 'js',
    fileName: 'main.js',
    bundleName: 'main.js',
    glob: '**/*.js',
    // noParse is an array which will skip all require() and global parsing for each file in the array. Use this for
    // giant libs like jquery or threejs that don't have any requires or node-style globals but take forever to parse.
    noParse: ['jquery', 'lodash', 'bootstrap', 'tether']
  },

  css: {
    src: 'css',
    dest: 'css',
    glob: '**/*.scss',
    cacheName: 'css-task',
    // https://github.com/postcss/autoprefixer#browsers
    autoprefixerBrowsers: [
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
  },

  images: {
    src: '.',
    dest: 'images',
    glob: '**/*.+(png|jpg|jpeg|gif|bmp)',
    cacheName: 'images-task'
  },

  fonts: {
    src: '.',
    dest: 'fonts',
    glob: '**/*.+(eot|ttf|woff|woff2|otf|svg)',
    cacheName: 'fonts-task'
  },

  cssLint: {
    src: '.',
    glob: '**/*.scss',
    ideSupport: false,
    cacheName: 'css-lint-task'
  },

  jsLint: {
    src: '.',
    glob: '**/*.js',
    ideSupport: true,
    cacheName: 'js-lint-task'
  },

  rev: {
    manifestFile: 'rev-manifest.json',
    assets: {
      glob: '**/*',
      ignoreGlob: '/**/*.+(html|map)'
    },
    updateReferences: {
      glob: '/**/*.+(html|css|js)'
    }
  }
};
