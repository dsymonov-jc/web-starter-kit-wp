/**
 * Lint JavaScript files
 */
const env = require('../helpers/env');
const { ESLint } = require('eslint');

env({ path: process.env.DOTENV_CONFIG_PATH });

module.exports = function () {
  const eslint = new ESLint({
    fix: process.env.LINT_MODE === 'fix',
    useEslintrc: true,
  });

  return async (done) => {
    const results = await eslint.lintFiles(['./js/**/*.js']);

    if (process.env.LINT_MODE === 'fix') await ESLint.outputFixes(results);

    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    if (resultText !== '') console.log(resultText);

    return done();
  };
};
