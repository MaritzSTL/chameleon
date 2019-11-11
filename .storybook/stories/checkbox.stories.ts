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

    return html`
      <chameleon-checkbox
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-checkbox>
    `;
  },
  { info: { inline: true } }
);
