import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
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
    const readonly = boolean("Read Only", false);

    return html`
      <chameleon-date
        .placeholder="${placeholder}"
        ?readonly="${readonly}"
        .label="${label}"
        .min="${minValue}"
        .max="${maxValue}"
        @chameleon.date.input="${eventDetails.action("chameleon.date.input")}"
      ></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);

stories.add(
  "Pre-selected Value",
  () => {
    const placeholder = text("Placeholder", "Select Date");
    const label = text("Label", "Date *");
    const readonly = boolean("Read Only", false);

    return html`
      <chameleon-date
        .placeholder="${placeholder}"
        .label="${label}"
        ?readonly="${readonly}"
        value="${`2020-01-13`}"
        @chameleon.date.input="${eventDetails.action("chameleon.date.input")}"
      ></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
