import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/checkbox/src/chameleon-checkbox";

const stories = storiesOf("Checkbox", module);

stories.addDecorator(withKnobs);

stories.add(
  "Checkbox",
  () => {
    const label = text("Label", "");
    const name = text("Name", "input-form-name");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const required = boolean("Required", false);
    const invalid = boolean("Invalid", false);

    return html`
      <chameleon-checkbox
        label="${label}"
        name="${name}"
        ?checked="${checked}"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?invalid="${invalid}"
        ?required="${required}"
      ></chameleon-checkbox>
    `;
  },
  { info: { inline: true } }
);
