import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/toast/src/chameleon-toast";
import "../../packages/toast/src/chameleon-toast";

const stories = storiesOf("Toast", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Toast",
  () => {
    return html`
      <chameleon-toast> </chameleon-toast>
    `;
  },
  { info: { inline: true } }
);
