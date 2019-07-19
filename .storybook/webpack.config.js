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
  return config;
};
