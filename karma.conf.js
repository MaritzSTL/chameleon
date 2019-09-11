const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        {
          pattern: config.grep ? config.grep : "packages/**/*.test.ts",
          type: "module"
        }
      ],
      plugins: [require.resolve("@open-wc/karma-esm"), "karma-*"],
      frameworks: ["esm"],
      babelConfig: require("./babel.config.js"),
      esm: {
        nodeResolve: true,
        compatibility: "all",
        babel: true,
        nodeResolve: true,
        fileExtensions: [".ts"]
      }
    })
  );
  return config;
};
