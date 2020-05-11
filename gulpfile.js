(function () {
  'use strict';

  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();

  var paths = {
    baseDir: './src',
    styles: './src/css/**/*.css',
    html: './src/**/*.html',
    js: './src/js/**/*.js'
  };

  /**
   * Single task for browserSync
   * @ref http://www.browsersync.io/docs/options/
   * @more https://github.com/BrowserSync/recipes
   */
  gulp.task('default', function () {
    browserSync.init({
      server: {
        baseDir: paths.baseDir,
        index: "index.html",
        directory: true,
        routes: {
          //If you are using bower or npm
          "/bower_components": "bower_components",
          "/node_modules": "node_modules"
        }
      },
      port: 8080,
      files: [
        paths.styles,
        paths.html,
        paths.js],
      notify: false,
      online: false,
      reloadOnRestart: true
      // browser: ["google chrome", "firefox"]
    });
  });

})();
