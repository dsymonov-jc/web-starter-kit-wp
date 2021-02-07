/**
 * Build custom styles files listed in the config, without sourcemaps & Gcmq
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sortMedia = require('postcss-sort-media-queries');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

sass.compiler = require('sass');

module.exports = function () {
  const { isSortMedia } = global.buildStyles.custom.isSortMedia;
  const plugins = [autoprefixer()];

  if (isSortMedia) {
    plugins.push(sortMedia({ sort: global.buildStyles.sortType }));
  }

  return (done) =>
    gulp
      .src('./scss/custom/*.scss', { sourcemaps: process.env.NODE_ENV === 'production' })
      .pipe(sass.sync({ sourceMap: process.env.NODE_ENV === 'production' }))
      .on('error', (error) => notifier.error(error.message, 'Custom Sass compiling error', done))
      .pipe(postcss(plugins))
      .pipe(gulp.dest(`../${global.folder.build}/css`, { sourcemaps: './' }));
};
