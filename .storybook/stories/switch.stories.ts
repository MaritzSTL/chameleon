import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/switch/src/chameleon-switch";

const stories = storiesOf("Switch", module);

stories.addDecorator(withKnobs);

stories.add(
  "Switch",
  () => {
    const label = text("Label", "");
    const checked = boolean("Checked", true);
    const readonly = boolean("Read Only", false);

    return html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?readonly="${readonly}"
      ></chameleon-switch>
    `;
  },
  { info: { inline: true } }
);
