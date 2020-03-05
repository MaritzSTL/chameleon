import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html, svg } from "lit-html";
import "@chameleon-ds/multiselect/src/chameleon-multiselect";

const stories = storiesOf("Multiselect", module);

stories.addDecorator(withKnobs);

const searchIcon = (slot: string) => svg`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-search"
    slot="${slot}"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`;

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
  "Multiselect",
  () => {
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const loading = boolean("Loading", false);
    const label = text("Label", "");
    const placeholder = text("Placeholder", "Select an option...");
    const error = text("Error", "");

    return html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?loading="${loading}"
        .label="${label}"
        .placeholder="${placeholder}"
        .options="${options}"
        @chameleon.select=${eventDetails.action("chameleon.select")}
        .errorMessage="${error}"
      ></chameleon-multiselect>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);

stories.add(
  "Pre-Selected Values",
  () => {
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const loading = boolean("Loading", false);
    const label = text("Label", "");
    const placeholder = text("Placeholder", "Select an option...");
    const error = text("Error", "");

    return html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?loading="${loading}"
        .label="${label}"
        .placeholder="${placeholder}"
        .options="${options}"
        .value="${["arch"]}"
        @chameleon.select=${eventDetails.action("chameleon.select")}
        .errorMessage="${error}"
      ></chameleon-multiselect>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);

stories.add(
  "With Icon",
  () => {
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const loading = boolean("Loading", false);
    const label = text("Label", "");
    const placeholder = text("Placeholder", "Select an option...");
    const error = text("Error", "");

    return html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?loading="${loading}"
        .label="${label}"
        .placeholder="${placeholder}"
        .options="${options}"
        @chameleon.select=${eventDetails.action("chameleon.select")}
        .errorMessage="${error}"
      >
        ${searchIcon("icon")}
      </chameleon-multiselect>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
