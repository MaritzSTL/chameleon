import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-element";
import "../../packages/radio/src/chameleon-radio";

const stories = storiesOf("Radio", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Radio",
  () => {
    const label = text("Label", "");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);

    return html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled=${disabled}
      ></chameleon-radio>
    `;
  },
  { info: { inline: true } }
);
