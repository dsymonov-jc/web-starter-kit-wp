const global = {
  task: {
    lintHtml: 'lint-html',
    lintJs: 'lint-js',
    fixJs: 'fix-js',
    buildHtml: 'build-html',
    buildJs: 'build-js',
    buildStyles: 'build-styles',
    buildStylesCustom: 'build-styles-custom',
    buildStylesVendors: 'build-styles-vendors',
    buildImages: 'build-images',
    cleanBuild: 'clean-build',
    browserSync: 'browser-sync',
    watch: 'watch',
    build: 'build',
  },
  folder: {
    tasks: 'tasks',
    // dev: 'develop',
    build: 'public',
  },
  file: {
    html: {
      main: 'index.html',
    },
    js: {
      main: 'app',
      build: 'jquery.main',
      vendor: 'vendor',
    },
    styles: {
      main: 'styles',
      vendor: 'vendor',
    },
  },
  buildHtml: {
    templates: 'html/templates',
  },
  buildStyles: {
    // Sorting type css media queries: 'desktop-first' || 'mobile-first'
    sortType: 'desktop-first',
    custom: {
      isSortMedia: false,
    },
  },
  buildJs: {
    externalLibs: {
      jquery: 'jQuery',
    },
    getEntryPoints() {
      return {
        [global.file.js.build]: `./js/${global.file.js.main}`,
      };
    },
  },
  error: {
    sound: true,
    title: '< SYSTEM ERROR >',
    icon: './system_files/icons/error_icon.png',
    wait: true,
  },
  isProduction() {
    return process.argv[process.argv.length - 1] === this.task.build;
  },
  isFixJs() {
    return process.argv[process.argv.length - 1] === this.task.fixJs;
  }
};

module.exports = global;
