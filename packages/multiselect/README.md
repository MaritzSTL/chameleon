# Chameleon Multiselect

```js script
import { html, svg } from "lit-html";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-multiselect.js";

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
    postLabel: "St. Louis, MO",
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
    postLabel: "St. Louis, MO",
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
    postLabel: "St. Louis, MO",
  },
];

const searchIcon = svg`
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
    slot="icon"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`;

export default {
  title: "Components|Multiselect",
  component: "chameleon-multiselect",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name        | Type(s) | Default Value | Description                                                                         |
| -------------------- | ------- | ------------- | ----------------------------------------------------------------------------------- |
| `name`               | Boolean | `false`       | The multiselect's form name                                                         |
| `options`            | Array   | `false`       | An array of the possible options to be selected                                     |
| `filteredOptions`    | Array   | `false`       | An array of filtered options                                                        |
| `selectedOptions`    | Array   | `false`       | An array of the selected options                                                    |
| `active`             | Boolean | `false`       | A Boolean attribute which, if present, displays the filtered options                |
| `disabled`           | Boolean | `false`       | A Boolean attribute which is present if the input should be disabled                |
| `readonly`           | Boolean | `false`       | A Boolean attribute which, if true, indicates that the multiselect cannot be edited |
| `required`           | Boolean | `false`       | A Boolean attribute which, if true, indicates the input is required                 |
| `invalid`            | Boolean | `false`       | A Boolean which, if true, indicates that the input is valid                         |
| `label`              | String  | `false`       | The input's label                                                                   |
| `placeholder`        | String  | `false`       | The input's placeholder text                                                        |
| `instantSearch`      | Boolean | `false`       | When true, allows instant search functionality                                      |
| `instantSearchValue` | String  | `false`       | The instant search text value                                                       |
| `loading`            | Boolean | `false`       | Whether or not multiselect is loading                                               |
| `validationMessage`  | String  | `false`       | The multiselect's error message                                                     |

## Examples

### Default

```js preview-story
export const Default = () => {
  const disabled = boolean("Disabled", false);
  const readonly = boolean("Read Only", false);
  const required = boolean("Required", false);
  const loading = boolean("Loading", false);
  const invalid = boolean("Invalid", false);
  const label = text("Label", "Landmarks");
  const placeholder = text("Placeholder", "Select an option...");
  const error = text("Error", "");

  return html`
    <chameleon-multiselect
      ?disabled="${disabled}"
      ?readonly="${readonly}"
      ?required="${required}"
      ?loading="${loading}"
      ?invalid="${invalid}"
      .label="${label}"
      .placeholder="${placeholder}"
      .options="${options}"
      .validationMessage="${error}"
    ></chameleon-multiselect>
  `;
};
```

Icon

```js preview-story
export const Icon = () => html`
  <chameleon-multiselect
    label="Landmarks"
    placeholder="Select an option..."
    .options="${options}"
  >
    ${searchIcon}
  </chameleon-multiselect>
`;
```
