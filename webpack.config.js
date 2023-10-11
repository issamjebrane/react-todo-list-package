const path = require('path');

module.exports = {
  entry: './TodoApp.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'todo-app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
