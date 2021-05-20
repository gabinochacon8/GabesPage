const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};