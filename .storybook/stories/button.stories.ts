import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, radios } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/button/src/chameleon-button";

const stories = storiesOf("Button", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Primary",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="primary"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Secondary",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="secondary"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Text",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="text"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);
