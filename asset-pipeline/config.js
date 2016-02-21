import path from 'path';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const ROOT_DIR = path.normalize(path.join(__dirname, '..'));
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DEST_DIR = path.join(ROOT_DIR, 'public');

export default {
  isDev: argv.dev,
  isProd: argv.prod,

  ROOT_DIR,
  SRC_DIR,
  DEST_DIR,

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
    noParse: ['jquery', 'lodash', 'bootstrap', 'tether'],
    // extensions is an array of optional extra extensions for the module lookup machinery to use when the extension
    // has not been specified. By default browserify considers only .js and .json files in such cases.
    extensions: []
  },

  css: {
    src: 'css',
    dest: 'css',
    glob: '**/*.scss',
    cacheName: 'css-task',
    // Autoprefixer uses Browserslist, so you can specify the browsers you want to target in your project by queries
    // like last 2 versions or > 5%. For more info check out https://github.com/ai/browserslist#browsers and
    // https://github.com/ai/browserslist#queries
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
    ],
    postCSSAssetsLoadPaths: [
      path.join(DEST_DIR, 'images'),
      path.join(DEST_DIR, 'fonts')
    ]
  },

  images: {
    src: '.',
    dest: 'images',
    glob: '**/*.+(png|jpg|jpeg|gif|bmp|svg)',
    cacheName: 'images-task'
  },

  fonts: {
    src: '.',
    dest: 'fonts',
    glob: '**/*.+(eot|ttf|woff|woff2|otf)',
    cacheName: 'fonts-task'
  },

  cssLint: {
    src: '.',
    glob: '**/*.scss',
    // If you have built-in ide support for `stylelint` feel free to set this to true, if `ideSupport` is true.
    // The `css-lint` task won't run after each css modification if true.
    ideSupport: false,
    cacheName: 'css-lint-task',
    // Ignore files / folders from being linted. Note for `stylelint` you have to edit `.stylelintrc`
    // ignoreFiles attribute.
    ignoreGlob: '**/css/vendor/**'
  },

  jsLint: {
    src: '.',
    glob: '**/*.js',
    // Same as `cssLint.ideSupport`. For this you need `eslint` support.
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
