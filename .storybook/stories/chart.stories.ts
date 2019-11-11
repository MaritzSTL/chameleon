import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/chart/src/chameleon-chart";

const stories = storiesOf("Chart", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Basic",
  () => {
    // const subtitleText = text("Subtitle", "Destination");
    // const titleText = text("Title", "St. Louis, MO");

    return html`
      <chameleon-chart type="arc"></chameleon-chart>
    `;
  },
  { info: { inline: true } }
);
