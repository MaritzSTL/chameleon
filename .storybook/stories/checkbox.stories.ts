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
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);

    return html`
      <chameleon-checkbox
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
      ></chameleon-checkbox>
    `;
  },
  { info: { inline: true } }
);
