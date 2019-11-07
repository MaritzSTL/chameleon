import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/alert/src/chameleon-alert";

const stories = storiesOf("Alert", module);

stories.addDecorator(withKnobs);

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
