/**
 * Build js
 */

require('dotenv').config();
const webpack = require('webpack');
const path = require('path');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

module.exports = function () {
  return (done) => {
    try {
      const config = {
        mode: 'none',
        entry: global.buildJs.getEntryPoints(),
        output: {
          path: path.resolve(`../${global.folder.build}`, 'js/'),
          filename: '[name].js',
        },
        target: 'browserslist',
        optimization: {
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              vendor: {
                test: /[\\/](node_modules|vendor_entries)[\\/]/,
                filename: `${global.file.js.vendor}.js`,
              },
            },
          },
          minimize: process.env.NODE_ENV === 'production',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              },
            },
          ],
        },
        externals: global.buildJs.externalLibs,
      };

      webpack(config, (error, stats) => {
        if (error) {
          throw new Error(error);
        }

        if (process.env.NODE_ENV === 'production') {
          console.log(
            stats.toString({
              version: false,
              hash: false,
              chunks: false,
              colors: true,
            })
          );
        }

        return done();
      });
    } catch (error) {
      notifier.error(error, 'JS compiling error', done);
    }
  };
};
