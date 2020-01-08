import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/timezone/src/chameleon-timezone";

const stories = storiesOf("Timezone", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    const timezoneLabel = text("Label", "Please select your Timezone");
    const timezoneSubLabel = text("Sub Label", "");

    return html`
      <chameleon-timezone
        .timezoneLabel=${timezoneLabel}
        .timezoneSubLabel=${timezoneSubLabel}
      ></chameleon-timezone>
    `;
  },
  { info: { inline: true } }
);
