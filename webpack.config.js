const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:  mode,

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-preset-env",
                            {
                              // Options
                            },
                          ],
                        ],
                      },
                    },
                  },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  mode !== 'production' ? "style-loader" : MiniCssExtractPlugin.loader,
                  "css-loader",
                  "postcss-loader",
                  "sass-loader",
                ],
              },
        ]
    },

    devtool: 'source-map',

    devServer: {
        static: './dist'
    },
};
