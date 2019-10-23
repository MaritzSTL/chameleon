import webpack from "webpack";

module.exports = ({ config }: { config: webpack.Configuration }) => {
  config!.module!.rules!.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      }
    ]
  });
  config!.resolve!.extensions!.push(".ts");
  return config;
};
