import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/uploader/src/chameleon-uploader";

const stories = storiesOf("Uploader", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Single File",
  () => {
    const label = text("Label", "Upload a single file");

    return html`
      <chameleon-uploader id="uploader" label="${label}"></chameleon-uploader>
    `;
  },
  { info: { inline: true } }
);
