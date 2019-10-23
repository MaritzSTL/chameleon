const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = (config: any) => {
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
      },
      coverageIstanbulReporter: {
        thresholds: {
          emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
          // thresholds for all files
          global: {
            statements: 80,
            branches: 80,
            functions: 80
          }
        }
      }
    })
  );
  return config;
};
