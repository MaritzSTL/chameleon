import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import minify from "rollup-plugin-babel-minify";

const globalLibs = {
    "lit-element": "litElement"
  },
  externalLibs = ["lit-element"];

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
    plugins: [resolve(), typescript()]
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
    plugins: [resolve(), typescript(), minify({ comments: false })]
  }
];
