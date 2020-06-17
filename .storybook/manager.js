import { addons } from "storybook-prebuilt/addons.js";
import { create } from "storybook-prebuilt/theming/create.js";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Chameleon",
    brandUrl: "https://github.com/maritzstl/chameleon",
  }),
});
