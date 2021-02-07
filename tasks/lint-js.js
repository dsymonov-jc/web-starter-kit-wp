/**
 * Lint ES
 */

const { ESLint } = require('eslint');

const global = require('../gulp-config.js');

module.exports = function (options) {
  const fixJs = global.isFixJs();
  const eslint = new ESLint({
    fix: fixJs,
    useEslintrc: true,
  });

  return async (done) => {
    const results = await eslint.lintFiles(['./js/**/*.js']);

    if (fixJs) await ESLint.outputFixes(results);

    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    if (resultText !== '') console.log(resultText);

    return done();
  };
};
