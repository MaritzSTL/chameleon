import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/date/src/chameleon-date";

const stories = storiesOf("Date", module);

stories.addDecorator(withKnobs);

stories.add(
  "Date",
  () => {
    const placeholder = text("Placeholder", "Select Date");
    const label = text("Label", "Date *");

    return html`
      <chameleon-date
        .placeholder="${placeholder}"
        .label="${label}"
      ></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
