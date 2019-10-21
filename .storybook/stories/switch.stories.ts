import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-element";
import "../../packages/switch/src/chameleon-switch";

const stories = storiesOf("Switch", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Switch",
  () => {
    const label = text("Label", "");
    const checked = boolean("Checked", true);

    return html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-switch>
    `;
  },
  { info: { inline: true } }
);
