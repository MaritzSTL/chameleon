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
   * chameleon-skeleton
   */
  {
    input: "packages/skeleton/src/chameleon-skeleton.ts",
    output: {
      file: "packages/skeleton/dist/chameleon-skeleton.js",
      format: "umd",
      name: "chameleon-skeleton",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/skeleton/src/chameleon-skeleton.ts",
    output: {
      file: "packages/skeleton/dist/chameleon-skeleton.min.js",
      format: "umd",
      name: "chameleon-skeleton",
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
  },
  /**
   * chameleon-card
   */
  {
    input: "packages/card/src/chameleon-card.ts",
    output: {
      file: "packages/card/dist/chameleon-card.js",
      format: "umd",
      name: "chameleon-card",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/card/src/chameleon-card.ts",
    output: {
      file: "packages/card/dist/chameleon-card.min.js",
      format: "umd",
      name: "chameleon-card",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-card-header
   */
  {
    input: "packages/card-header/src/chameleon-card-header.ts",
    output: {
      file: "packages/card-header/dist/chameleon-card-header.js",
      format: "umd",
      name: "chameleon-card-header",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/card-header/src/chameleon-card-header.ts",
    output: {
      file: "packages/card-header/dist/chameleon-card-header.min.js",
      format: "umd",
      name: "chameleon-card-header",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-card-image
   */
  {
    input: "packages/card-image/src/chameleon-card-image.ts",
    output: {
      file: "packages/card-image/dist/chameleon-card-image.js",
      format: "umd",
      name: "chameleon-card-image",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/card-image/src/chameleon-card-image.ts",
    output: {
      file: "packages/card-image/dist/chameleon-card-image.min.js",
      format: "umd",
      name: "chameleon-card-image",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-radio
   */
  {
    input: "packages/radio/src/chameleon-radio.ts",
    output: {
      file: "packages/radio/dist/chameleon-radio.js",
      format: "umd",
      name: "chameleon-radio",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/radio/src/chameleon-radio.ts",
    output: {
      file: "packages/radio/dist/chameleon-radio.min.js",
      format: "umd",
      name: "chameleon-radio",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-switch
   */
  {
    input: "packages/switch/src/chameleon-switch.ts",
    output: {
      file: "packages/switch/dist/chameleon-switch.js",
      format: "umd",
      name: "chameleon-switch",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/switch/src/chameleon-switch.ts",
    output: {
      file: "packages/switch/dist/chameleon-switch.min.js",
      format: "umd",
      name: "chameleon-switch",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-checkbox
   */
  {
    input: "packages/checkbox/src/chameleon-checkbox.ts",
    output: {
      file: "packages/checkbox/dist/chameleon-checkbox.js",
      format: "umd",
      name: "chameleon-checkbox",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/checkbox/src/chameleon-checkbox.ts",
    output: {
      file: "packages/checkbox/dist/chameleon-checkbox.min.js",
      format: "umd",
      name: "chameleon-checkbox",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-hero
   */
  {
    input: "packages/hero/src/chameleon-hero.ts",
    output: {
      file: "packages/hero/dist/chameleon-hero.js",
      format: "umd",
      name: "chameleon-hero",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/hero/src/chameleon-hero.ts",
    output: {
      file: "packages/hero/dist/chameleon-hero.min.js",
      format: "umd",
      name: "chameleon-hero",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  },
  /**
   * chameleon-chip
   */
  {
    input: "packages/chip/src/chameleon-chip.ts",
    output: {
      file: "packages/chip/dist/chameleon-chip.js",
      format: "umd",
      name: "chameleon-chip",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...devPlugins]
  },
  {
    input: "packages/chip/src/chameleon-chip.ts",
    output: {
      file: "packages/chip/dist/chameleon-chip.min.js",
      format: "umd",
      name: "chameleon-chip",
      globals: globalLibs,
      external: externalLibs
    },
    plugins: [...prodPlugins]
  }
];
