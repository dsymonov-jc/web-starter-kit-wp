/**
 * Build html from templates
 */

const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

module.exports = function () {
  return (done) => gulp.src([`./${global.buildHtml.templates}/*.html`, `./${global.buildHtml.templates}/*.njk`])
    .pipe(nunjucks.compile())
    .on('error', (error) => notifier.error(error.message, 'HTML compiling error', done))
    .pipe(gulp.dest(`../${global.folder.build}`));
};
