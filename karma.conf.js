const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        {
          pattern: config.grep ? config.grep : "packages/**/*.test.js",
          type: "module",
        },
      ],
      plugins: [require.resolve("@open-wc/karma-esm"), "karma-*"],
      frameworks: ["esm"],
      esm: {
        nodeResolve: true,
        babel: true,
        fileExtensions: [".js"],
        coverageExclude: ["packages/**/*.test.js"],
      },
      coverageIstanbulReporter: {
        thresholds: {
          emitWarning: true,
          global: {
            statements: 90,
            functions: 90,
            branches: 90,
          },
        },
      },
    })
  );
  return config;
};
