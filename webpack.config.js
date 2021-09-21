const path = require("path");

module.exports = {
  entry: path.resolve("./", "client", "src", "index.js"),
  output: {
    path: path.resolve("./", "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(mp4|png|JPG|gif|css|pdf|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "video",
            },
          },
        ],
      },
    ],
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
