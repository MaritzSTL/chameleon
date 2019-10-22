import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/loader/src/chameleon-loader";

const stories = storiesOf("Loader", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Loader",
  () => {
    return html`
      <chameleon-loader></chameleon-loader>
    `;
  },
  { info: { inline: true } }
);
