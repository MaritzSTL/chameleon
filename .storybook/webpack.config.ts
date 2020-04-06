import webpack from "webpack";

module.exports = ({ config }: { config: webpack.Configuration }) => {
  config!.module!.rules!.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
    ],
  });
  config!.resolve!.extensions!.push(".ts");
  Object.assign(config!.resolve!.alias!, {
    "@chameleon-ds/loader": "@chameleon-ds/loader/src/chameleon-loader",
    "@chameleon-ds/button": "@chameleon-ds/button/src/chameleon-button",
    "@chameleon-ds/skeleton": "@chameleon-ds/skeleton/src/chameleon-skeleton",
    "@chameleon-ds/chip": "@chameleon-ds/chip/src/chameleon-chip",
    "@chameleon-ds/select": "@chameleon-ds/select/src/chameleon-select",
    "@chameleon-ds/card": "@chameleon-ds/card/src/chameleon-card",
    "@chameleon-ds/input": "@chameleon-ds/input/src/chameleon-input",
    "@chameleon-ds/multiselect":
      "@chameleon-ds/multiselect/src/chameleon-multiselect",
    "@chameleon-ds/paginator":
      "@chameleon-ds/paginator/src/chameleon-paginator",
  });
  return config;
};
