module.exports = {
  stories: ["../README.md", "../docs/**/*.md", "../packages/*/README.md"],
  addons: [
    "storybook-prebuilt/addon-knobs/register.js",
    "storybook-prebuilt/addon-docs/register.js",
    "storybook-prebuilt/addon-viewport/register.js",
    "storybook-prebuilt/addon-backgrounds/register.js",
  ],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
    babel: true,
  },
};
