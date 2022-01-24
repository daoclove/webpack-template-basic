const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './js/main.js',

  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'app.js', 기본적으로 지정안하면 dist 폴더에 생성함 
    clean: true
  },
  module:{
    rules:[
      {
        test:/\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },


  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: 'static'
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}