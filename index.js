'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);
    app.options = app.options || {};

    app.options.postcssOptions = {
      compile: {
        enabled: true,
        plugins: [{ module: require('postcss-import') }]
      }
    };
  }
};
