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
  config!.resolve!.alias!["@chameleon-ds/loader"] =
    "@chameleon-ds/loader/src/chameleon-loader";
  config!.resolve!.alias!["@chameleon-ds/button"] =
    "@chameleon-ds/button/src/chameleon-button";
  config!.resolve!.alias!["@chameleon-ds/skeleton"] =
    "@chameleon-ds/skeleton/src/chameleon-skeleton";
  config!.resolve!.alias!["@chameleon-ds/chip"] =
    "@chameleon-ds/chip/src/chameleon-chip";
  return config;
};
