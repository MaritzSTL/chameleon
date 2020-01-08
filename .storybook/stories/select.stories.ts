import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/select/src/chameleon-select";

const stories = storiesOf("Select", module);

stories.addDecorator(withKnobs);

const options = [
  {
    value: "arch",
    label: "Gateway Arch",
    subLabel: "Historical Landmark",
    preLabel: html`
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/00/St_Louis_night_expblend_cropped.jpg"
      />
    `,
    postLabel: "St. Louis, MO"
  },
  {
    value: "union-station",
    label: "Union Station",
    subLabel: "Historical Landmark",
    preLabel: html`
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/St._Louis_Union_Station_%2817577826564%29.jpg/320px-St._Louis_Union_Station_%2817577826564%29.jpg"
      />
    `,
    postLabel: "St. Louis, MO"
  },
  {
    value: "scott-joplin-house",
    label: "Scott Joplin House",
    subLabel: "Historical Landmark",
    preLabel: html`
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Scott_Joplin_House.jpg/568px-Scott_Joplin_House.jpg"
      />
    `,
    postLabel: "St. Louis, MO"
  }
];

stories.add(
  "Basic",
  () => {
    const placeHolder = text("Place Holder", "Please select an option");
    const label = text("Label", "");

    return html`
      <chameleon-select
        .options="${options}"
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

stories.add(
  "Searchable",
  () => {
    const placeHolder = text("Place Holder", "Please select an option");
    const label = text("Label", "");

    return html`
      <chameleon-select
        .options="${options}"
        .label="${label}"
        placeHolder="${placeHolder}"
        ?searchable="${true}"
        @chameleon.select=${eventDetails.action("chameleon.select")}
        @chameleon-select.close=${eventDetails.action("chameleon-select.close")}
        >select
      </chameleon-select>
    `;
  },
  { info: { inline: true } }
);
