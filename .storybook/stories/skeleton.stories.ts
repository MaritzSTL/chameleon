import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/skeleton/src/chameleon-skeleton";

const stories = storiesOf("Skeleton", module);

stories.addDecorator(withKnobs);

stories.add(
  "Skeleton",
  () => {
    const height = text("Height", "100%");
    const width = text("Width", "100%");
    const theme = text("Theme", "primary");
    const cHeight = number("Circle Height", 50);

    return theme === "primary"
      ? html`
          <chameleon-skeleton
            theme="${`primary`}"
            height="${height}"
            width="${width}"
          >
          </chameleon-skeleton>
        `
      : theme === "secondary"
      ? html` <chameleon-skeleton theme="${`secondary`}" cHeight="${cHeight}">
        </chameleon-skeleton>`
      : html``;
  },
  { info: { inline: true } }
);
