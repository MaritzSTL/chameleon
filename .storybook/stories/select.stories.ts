import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/select/src/chameleon-select";

const stories = storiesOf("Select", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs);

const exampleData = [
  {
    value: "value-0",
    label: "Direct Marketing",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-1",
    label: "District 1",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-2",
    label: "District 2",
    preLabel: "pre-label",
    postLabel: "Enrollment"
  },
  {
    value: "value-3",
    label: "District 3",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-4",
    label: "four",
    preLabel: "pre-label",
    postLabel: "Enrollment"
  },
  {
    value: "value-5",
    label: "five",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-6",
    label: "six",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-7",
    label: "seven",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-8",
    label: "eight",
    preLabel: "pre-label",
    postLabel: "Enrollment"
  },
  {
    value: "value-9",
    label: "nine",
    preLabel: "pre-label",
    postLabel: "Custom"
  },
  {
    value: "value-10",
    label: "ten",
    preLabel: "pre-label",
    postLabel: "Custom"
  }
];

stories.add(
  "Basic",
  () => {
    const placeHolder = text("Place Holder", "Please select an option");
    const label = text("Label", "");

    return html`
      <chameleon-select
        .options="${exampleData}"
        .label="${label}"
        placeHolder="${placeHolder}"
        @chameleon.select=${eventDetails.action("chameleon.select")}
        @chameleon-select.close=${eventDetails.action("chameleon-select.close")}
        >select
      </chameleon-select>
    `;
  },
  { info: { inline: true } }
);
