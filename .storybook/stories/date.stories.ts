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
    const invalid = boolean("Invalid", false);
    const required = boolean("Required", false);
    const disabled = boolean("Disabled", false);
    const error = text("Error", "");
    const name = text("Name", "input-form-name");
    return html`
      <chameleon-date
        name="${name}"
        .placeholder="${placeholder}"
        ?readonly="${readonly}"
        .label="${label}"
        .min="${minValue}"
        .max="${maxValue}"
        ?required="${required}"
        ?invalid="${invalid}"
        ?disabled="${disabled}"
        .validationMessage="${error}"
        @chameleon.date.input="${eventDetails.action("chameleon.date.input")}"
      ></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);

stories.add(
  "Pre-selected Value",
  () => {
    const name = text("Name", "input-form-name");
    const placeholder = text("Placeholder", "Select Date");
    const label = text("Label", "Date *");
    const readonly = boolean("Read Only", false);
    const invalid = boolean("Invalid", false);
    const required = boolean("Required", false);
    const disabled = boolean("Disabled", false);
    const error = text("Error", "");

    return html`
      <chameleon-date
        name="${name}"
        .placeholder="${placeholder}"
        .label="${label}"
        ?readonly="${readonly}"
        value="${`2020-01-13`}"
        ?required="${required}"
        ?invalid="${invalid}"
        ?disabled="${disabled}"
        .validationMessage="${error}"
        @chameleon.date.input="${eventDetails.action("chameleon.date.input")}"
      ></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
