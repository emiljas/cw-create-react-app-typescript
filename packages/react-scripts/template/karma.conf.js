'use strict';
module.exports = function(config) {
  config.set({
    frameworks: [
      'mocha',
      'chai-as-promised',
      'chai',
      'sinon',
      'karma-typescript',
    ],

    files: [
      { pattern: 'src/**/*.ts' },
      { pattern: 'src/**/*.tsx' },
      { pattern: 'tests/**/*ts' },
      'node_modules/chai/chai.js',
      'node_modules/react/umd/react.development.js',
      'node_modules/react-redux/dist/react-redux.js',
    ],

    preprocessors: {
      'src/**/*.tsx': ['karma-typescript', 'coverage'],
      'src/**/*.ts': ['karma-typescript', 'coverage'],
      'tests/**/*.ts': ['karma-typescript'],
    },

    reporters: ['progress', 'mocha', 'html', 'coverage', 'karma-typescript'],

    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
    },

    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    concurrency: Infinity,
  });
};
