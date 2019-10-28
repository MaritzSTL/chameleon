import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/spinner/src/chameleon-spinner";

const stories = storiesOf("Spinner", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Spinner",
  () => {
    return html`
      <chameleon-spinner></chameleon-spinner>
    `;
  },
  { info: { inline: true } }
);
