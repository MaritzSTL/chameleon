import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/skeleton/src/chameleon-skeleton";

const stories = storiesOf("Skeleton", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

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
