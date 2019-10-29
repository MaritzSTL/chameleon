import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/select/src/chameleon-select";

const stories = storiesOf("Select", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Basic",
  () => {
    const disabled = boolean("Disabled", false);

    return html`
      <mtzwc-multiselect .options="${exampleStringData}"></mtzwc-multiselect>
    `;
  },
  { info: { inline: true } }
);
