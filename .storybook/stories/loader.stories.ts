import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-element";
import "../../packages/loader/src/chameleon-loader";

const stories = storiesOf("Loader", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Spinner (Default)",
  () => {
    return html`
      <chameleon-loader loader="spinner"></chameleon-loader>
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
