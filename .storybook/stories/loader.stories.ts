import { storiesOf } from "@storybook/polymer";
import { withKnobs, number } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/loader/src/chameleon-loader";

const stories = storiesOf("Loader", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Spinner (Default)",
  () => {
    const containerSize = number("Container Width", 21);

    return html`
      <div style="height: ${containerSize}px; width: ${containerSize}px;">
        <chameleon-loader loader="spinner"></chameleon-loader>
      </div>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Ellipsis",
  () => {
    return html`
      <chameleon-loader loader="ellipsis"></chameleon-loader>
    `;
  },
  { info: { inline: true } }
);
