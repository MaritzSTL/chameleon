import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import minify from "rollup-plugin-babel-minify";

const globalLibs = {
    "lit-element": "litElement"
  },
  externalLibs = ["lit-element"],
  devPlugins = [resolve(), typescript()],
  prodPlugins = [resolve(), typescript(), minify({ comments: false })];

export default [
  /**
   * cha-button
   */
  {
    input: "packages/button/src/cha-button.ts",
    output: {
      file: "packages/button/dist/cha-button.js",
      format: "umd",
      name: "cha-button",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/button/src/cha-button.ts",
    output: {
      file: "packages/button/dist/cha-button.min.js",
      format: "umd",
      name: "cha-button",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * cha-input
   */
  {
    input: "packages/input/src/cha-input.ts",
    output: {
      file: "packages/input/dist/cha-input.js",
      format: "umd",
      name: "cha-input",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/input/src/cha-input.ts",
    output: {
      file: "packages/input/dist/cha-input.min.js",
      format: "umd",
      name: "cha-input",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * cha-textarea
   */
  {
    input: "packages/textarea/src/cha-textarea.ts",
    output: {
      file: "packages/textarea/dist/cha-textarea.js",
      format: "umd",
      name: "cha-textarea",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/textarea/src/cha-textarea.ts",
    output: {
      file: "packages/textarea/dist/cha-textarea.min.js",
      format: "umd",
      name: "cha-textarea",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  }
];
