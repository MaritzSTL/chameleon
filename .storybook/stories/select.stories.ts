import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/select/src/chameleon-select";

const stories = storiesOf("Select", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

const exampleData = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" }
];

stories.add(
  "Basic",
  () => {
    // const disabled = boolean("Disabled", false);

    return html`
      <chameleon-select .options="${exampleData}"></chameleon-select>
    `;
  },
  { info: { inline: true } }
);
