import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/date/src/chameleon-date";

const stories = storiesOf("Date", module);

stories.addDecorator(withKnobs);

stories.add(
  "Date",
  () => {
    const placeholder = text("Placeholder", "Select Date");
    const label = text("Label", "Date *");
    const minValue = text("Min Value (YYYY-MM-DD)", "");
    const maxValue = text("Max Value (YYYY-MM-DD)", "");

    return html`
      <chameleon-date
        .placeholder="${placeholder}"
        .label="${label}"
        .min="${minValue}"
        .max="${maxValue}"
        @chameleon.date.input="${eventDetails.action("chameleon.date.input")}"
      ></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
