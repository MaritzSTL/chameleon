import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/chip/src/chameleon-chip";

const stories = storiesOf("Chip", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Chip",
  () => {
    return html`
      <chameleon-chip name="test">Crunchy</chameleon-chip>
    `;
  },
  { info: { inline: true } }
);
