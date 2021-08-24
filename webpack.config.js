const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'development',
  entry: './src/index.js',

  output: {
    path    : __dirname + '/dst',
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title   : 'FORCEMATE',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test   : /\.jsx?$/i,
        exclude: /^node_modules$/,
        use    : [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options: {
              importLoaders: 1,
              modules      : true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use : [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: __dirname + '/dst'
    },
    compress: true,
    port: 8080,
  },
};
