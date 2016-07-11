/**
 * Require Browsersync along with webpack and middleware for it
 */
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';
/**
 * Require ./webpack.config.js and make a bundler from it
 */
import webpackConfig from '../webpack.config';
const bundler = webpack(webpackConfig);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
    server: {
      baseDir: 'src',
      index: "index.html",
      middleware: [
        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: webpackConfig.output.publicPath,

          // pretty colored output
          stats: { colors: true }

          // for other settings see
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),

        // bundler should be the same as above
        webpackHotMiddleware(bundler),
        historyApiFallback()
      ]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
      'src/css/*.css',
      'src/*.html'
    ]
});
