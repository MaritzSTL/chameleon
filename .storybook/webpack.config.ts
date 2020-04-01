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
  config!.resolve!.alias!["@chameleon-ds/select"] =
    "@chameleon-ds/select/src/chameleon-select";
  config!.resolve!.alias!["@chameleon-ds/card"] =
    "@chameleon-ds/card/src/chameleon-card";
  config!.resolve!.alias!["@chameleon-ds/input"] =
    "@chameleon-ds/input/src/chameleon-input";
  config!.resolve!.alias!["@chameleon-ds/multiselect"] =
    "@chameleon-ds/multiselect/src/chameleon-multiselect";
  config!.resolve!.alias!["@chameleon-ds/paginator"] =
    "@chameleon-ds/paginator/src/chameleon-paginator";
  return config;
};
