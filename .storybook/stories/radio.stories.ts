import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/radio/src/chameleon-radio";

const stories = storiesOf("Radio", module);

stories.addDecorator(withKnobs);

stories.add(
  "Radio",
  () => {
    const name = text("Name", "input-form-name");
    const label = text("Label", "");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const invalid = boolean("Invalid", false);

    return html`
      <chameleon-radio
        label="${label}"
        name="${name}"
        ?checked="${checked}"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?invalid="${invalid}"
      ></chameleon-radio>
    `;
  },
  { info: { inline: true } }
);
