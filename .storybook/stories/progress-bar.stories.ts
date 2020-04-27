import { storiesOf } from "@storybook/polymer";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/progress-bar/src/chameleon-progress-bar";

const stories = storiesOf("Progress Bar", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    const percent = number("Percent", 75);
    const label = text("Label", "Processing...");

    return html`
      <chameleon-progress-bar percent="${percent}" label="${label}">
      </chameleon-progress-bar>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "With Item Count",
  () => {
    const total = number("Total Items", 100);
    const completed = number("Completed Items", 75);
    const label = text("Label", "Records Processed");

    return html`
      <chameleon-progress-bar
        total="${total}"
        completed="${completed}"
        label="${label}"
      >
      </chameleon-progress-bar>
    `;
  },
  { info: { inline: true } }
);
