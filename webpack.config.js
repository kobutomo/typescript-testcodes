const path = require('path');

module.exports = {
  entry: './dist/testModules.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  }
};
