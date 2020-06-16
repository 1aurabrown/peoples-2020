const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack')

var config = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          name: 'vendor',
          // sync + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules(?!\/tailwindcss)/,
          minSize: 0
        }
      }
    },
    minimizer: [
      new CssnanoPlugin({
        test: /.s?css?$/,
        sourceMap: true
      }),
      new TerserPlugin({
        sourceMap: true
      })
    ]
  },

  context: path.resolve(__dirname, 'src'),
  entry: {
    theme: "./scripts/theme.js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      sourceMap: true
    }),
    new CopyWebpackPlugin([{
      from: '**/*',
      to: path.join(__dirname, 'dist'),
      ignore: ['styles/', 'scripts/', '*.js', '*.scss', '*.sass', '*.css', ],
    }], {}),
    new SassLintPlugin(),
  ],

  output: {
    path: path.join(__dirname, 'dist/assets/'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { sourceMap: true }},
          { loader: 'css-loader', options: { sourceMap: true }},
          { loader: 'postcss-loader', options: { sourceMap: true }},
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  target: 'web'
};


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
  }
  return config
}
