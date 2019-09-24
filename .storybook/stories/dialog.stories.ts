import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/dialog/src/chameleon-dialog";

const stories = storiesOf("Dialog", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Basic",
  () => {
    const dialogVisible = boolean("Disabled", false);

    return html`
      <chameleon-dialog></chameleon-dialog>
    `;
  },
  { info: { inline: true } }
);
