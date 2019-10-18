import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
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
    const color = text("Color", "");
    const backgroundColor = text("Background Color", "");
    const showCloseable = boolean("Show", true);

    return html`
      <chameleon-toast
        color="${color}"
        backgroundColor="${backgroundColor}"
        ?showCloseable="${showCloseable}"
      ></chameleon-toast>
    `;
  },
  { info: { inline: true } }
);
