import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/timezone/src/chameleon-timezone";

const stories = storiesOf("Timezone", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    const timeZoneLabel = text("Label", "Please select your Timezone");
    const timeZoneSubLabel = text("Sub Label", "");

    return html`
      <chameleon-timezone
        .timeZoneLabel=${timeZoneLabel}
        .timeZoneSubLabel=${timeZoneSubLabel}
      ></chameleon-timezone>
    `;
  },
  { info: { inline: true } }
);
