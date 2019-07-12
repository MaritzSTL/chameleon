module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts");
  return config;
};
