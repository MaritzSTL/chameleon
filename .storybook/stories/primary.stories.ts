import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/button/src/cha-button";

const stories = storiesOf("Chameleon", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Button",
  () =>
    html`
      <cha-button ?disabled="${boolean("Disabled", false)}">Button</cha-button>
    `,
  { info: { inline: true } }
);
