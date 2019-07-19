module.exports = config => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["packages/**/__tests__/*.test.ts"],
    preprocessors: {
      "**/*.ts": "karma-typescript"
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: true
  });
};
