import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/checkbox/src/chameleon-checkbox";

const stories = storiesOf("Checkbox", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

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
