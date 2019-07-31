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
   * chameleon-button
   */
  {
    input: "packages/button/src/chameleon-button.ts",
    output: {
      file: "packages/button/dist/chameleon-button.js",
      format: "umd",
      name: "chameleon-button",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/button/src/chameleon-button.ts",
    output: {
      file: "packages/button/dist/chameleon-button.min.js",
      format: "umd",
      name: "chameleon-button",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-input
   */
  {
    input: "packages/input/src/chameleon-input.ts",
    output: {
      file: "packages/input/dist/chameleon-input.js",
      format: "umd",
      name: "chameleon-input",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/input/src/chameleon-input.ts",
    output: {
      file: "packages/input/dist/chameleon-input.min.js",
      format: "umd",
      name: "chameleon-input",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-textarea
   */
  {
    input: "packages/textarea/src/chameleon-textarea.ts",
    output: {
      file: "packages/textarea/dist/chameleon-textarea.js",
      format: "umd",
      name: "chameleon-textarea",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/textarea/src/chameleon-textarea.ts",
    output: {
      file: "packages/textarea/dist/chameleon-textarea.min.js",
      format: "umd",
      name: "chameleon-textarea",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  }
];
