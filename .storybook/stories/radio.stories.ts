import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/radio/src/chameleon-radio";

const stories = storiesOf("Radio", module);

stories.addDecorator(withKnobs);

stories.add(
  "Radio",
  () => {
    const label = text("Label", "");
    const checked = boolean("Checked", true);
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);

    return html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
      ></chameleon-radio>
    `;
  },
  { info: { inline: true } }
);
