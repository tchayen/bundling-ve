const path = require("path");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "./index.ts"),
  output: {
    path: path.join(__dirname, "dist-webpack"),
    library: {
      name: "component-library",
      type: "umd",
    },
    globalObject: "this",
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                "@babel/preset-typescript",
                ["@babel/preset-react", { runtime: "automatic" }],
                [
                  "@babel/preset-env",
                  { targets: { node: 14 }, modules: false },
                ],
              ],
              plugins: ["@vanilla-extract/babel-plugin"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new VanillaExtractPlugin(),
  ],
};
