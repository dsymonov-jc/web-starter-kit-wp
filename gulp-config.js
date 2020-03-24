module.exports = {
  task: {
    lintHtml: 'lint-html',
    lintJs: 'lint-js',
    fixJs: 'fix-js',
    buildHtml: 'build-html',
    buildJs: 'build-js',
    buildJsVendors: 'build-js-vendors',
    buildStyles: 'build-styles',
    buildStylesCustom: 'build-styles-custom',
    buildStylesVendors: 'build-styles-vendors',
    buildImages: 'build-images',
    cleanBuild: 'clean-build',
    copyFiles: 'copy-files',
    copyFilesProd: 'copy-files-production',
    browserSync: 'browser-sync',
    watch: 'watch',
    prod: 'build',
  },
  folder: {
    tasks: 'tasks',
    src: 'src',
    build: 'develop',
    prod: 'public',
    temp: '.temp',
  },
  file: {
    mainHtml: 'index.html',
    mainJs: 'app.js',
    publicJs: 'jquery.main.js',
    vendorJs: 'vendor.js',
    vendorJsComp: 'vendor-compile.js',
    vendorJsTemp: 'vendor.temp.js',
    mainStylesSrc: 'styles.scss',
    mainStyles: 'styles.css',
    vendorStylesSrc: 'vendor.scss',
    vendorStyles: 'vendor.css',
  },
  buildHtml: {
    templates: 'html/templates',
  },
  buildStyles: {
    // Sorting type css media queries: 'desktop-first' || 'mobile-first'
    sortType: 'desktop-first',
  },
  error: {
    sound: true,
    title: '< SYSTEM ERROR >',
    icon: './system_files/icons/error_icon.png',
    wait: true,
  },
  getFilesForStylesCustom() {
    return {
      files: [],
      isGcmq: false,
    };
  },
  getFilesToCopy() {
    return [
      `../${this.folder.prod}/**`,
      `!{../${this.folder.prod}/css,../${this.folder.prod}/css/**}`,
      `!{../${this.folder.prod}/js,../${this.folder.prod}/js/**}`,
    ];
  },
  getFilesToCopyProd() {
    return [
      `../${this.folder.build}/**`,
      `{../${this.folder.build}/js,../${this.folder.build}/css}`,
    ];
  },
  isProduction() {
    return process.argv[process.argv.length - 1] === this.task.prod;
  },
  isFixJs() {
    return process.argv[process.argv.length - 1] === this.task.fixJs;
  }
};
