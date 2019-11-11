import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/date/src/chameleon-date";

const stories = storiesOf("Date", module);

stories.addDecorator(withKnobs);

stories.add(
  "Date",
  () => {
    return html`
      <chameleon-date></chameleon-date>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
