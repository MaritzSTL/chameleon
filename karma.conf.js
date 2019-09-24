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
      esm: {
        nodeResolve: true,
        compatibility: "all",
        fileExtensions: [".ts"],
        customBabelConfig: {
          presets: ["@babel/preset-typescript"],
          plugins: [
            [
              "@babel/plugin-proposal-decorators",
              { decoratorsBeforeExport: true }
            ],
            "@babel/plugin-proposal-class-properties"
          ]
        }
      }
    })
  );
  return config;
};
