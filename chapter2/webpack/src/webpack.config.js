// const { resolve } = require('path');
const path = require('path');

// cjs导出语法
module.exports = {
  entry: 'src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
