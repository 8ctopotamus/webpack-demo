const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const path = require('path')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    publicPath: '',
  }, 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPwaManifest({
      name: "Robot Image Switcher",
      short_name: "Robot Switcher",
      description: "A cool app with different robot images.",
      background_color: 'pink',
      theme_color: 'pink',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('src/images/blue-robot.png'),
          sizes: [96, 128, 192, 256, 300],
        }
      ]
    }),
    new GenerateSW({
      swDest: './sw.js'
    })
  ]
}