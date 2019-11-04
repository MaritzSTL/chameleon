import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/alert/src/chameleon-alert";

const stories = storiesOf("Alert", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Alert (Default)",
  () => {
    const message = text(
      "Alert Message",
      "This is an alert message from chameleon!"
    );
    return html`
      <chameleon-alert .message="${message}"> </chameleon-alert>
    `;
  },
  { info: { inline: true } }
);
