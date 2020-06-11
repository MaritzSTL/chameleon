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
        compatibility: "all",
        fileExtensions: [".js"],
        coverageExclude: ["packages/**/*.test.js"],
        customBabelConfig: {
          plugins: [
            [
              "@babel/plugin-proposal-decorators",
              { decoratorsBeforeExport: true },
            ],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-proposal-nullish-coalescing-operator",
          ],
        },
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
