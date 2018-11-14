const path = require('path');
module.exports = {
  entry: './src/main.ts',
  //开发阶段服务
  devServer: {
    contentBase: '.'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.')
  }
}
