import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/skeleton/src/chameleon-skeleton";

const stories = storiesOf("Skeleton", module);

stories.addDecorator(withKnobs);

stories.add(
  "Skeleton",
  () => {
    const height = text("Height", "100%");
    const width = text("Width", "100%");

    return html`
      <chameleon-skeleton height="${height}" width="${width}">
      </chameleon-skeleton>
    `;
  },
  { info: { inline: true } }
);
