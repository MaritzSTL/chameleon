import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/timezone/src/chameleon-timezone";

const stories = storiesOf("Timezone", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    const timezoneLabel = text("Label", "Please select your Timezone");
    const timezoneSubLabel = text("Sub Label", "");
    const readonly = boolean("Read Only", false);

    return html`
      <chameleon-timezone
        ?readonly="${readonly}"
        .timezoneLabel="${timezoneLabel}"
        .timezoneSubLabel="${timezoneSubLabel}"
        @chameleon.timezone.input="${eventDetails.action(
          "chameleon.timezone.input"
        )}"
      ></chameleon-timezone>
    `;
  },
  { info: { inline: true } }
);
