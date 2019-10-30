import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/alert/src/chameleon-alert";

const stories = storiesOf("Alert", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Alert (Default)",
  () => {
    return html`
      <chameleon-alert></chameleon-alert>
      <section slot="message">
        <p>this is an alert message!!!</p>
      </section>
    `;
  },
  { info: { inline: true } }
);
