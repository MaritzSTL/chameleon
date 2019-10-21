const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts");
  config.resolve.alias["lit-element"] = path.resolve(
    "node_modules/lit-element"
  );
  config.resolve.alias["lit-html"] = path.resolve("node_modules/lit-html");
  return config;
};
