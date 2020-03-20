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
    const name = text("Name", "input-form-name");
    const timezoneLabel = text("Label", "Please select your Timezone");
    const timezoneSubLabel = text("Sub Label", "");
    const readonly = boolean("Read Only", false);
    const invalid = boolean("Invalid", false);
    const required = boolean("Required", false);
    const disabled = boolean("Disabled", false);
    return html`
      <chameleon-timezone
        name="${name}"
        .timezoneLabel="${timezoneLabel}"
        .timezoneSubLabel="${timezoneSubLabel}"
        ?readonly="${readonly}"
        ?required="${required}"
        ?disabled="${disabled}"
        ?invalid="${invalid}"
        @chameleon.timezone.input="${eventDetails.action(
          "chameleon.timezone.input"
        )}"
      ></chameleon-timezone>
    `;
  },
  { info: { inline: true } }
);
