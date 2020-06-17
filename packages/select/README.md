# Chameleon Select

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-select.js";

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

export default {
  title: "Components|Form Elements/Select",
  component: "chameleon-select",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name       | Type(s) | Default Value | Description                                                                    |
| ------------------- | ------- | ------------- | ------------------------------------------------------------------------------ |
| `name`              | Boolean | `false`       | The select's form name                                                         |
| `options`           | Array   | `false`       | An array of the possible options to be selected                                |
| `filteredOptions`   | Array   | `false`       | An array of filtered options                                                   |
| `selectedOptions`   | Array   | `false`       | An array of the selected options                                               |
| `active`            | Boolean | `false`       | A Boolean attribute which, if present, displays the filtered options           |
| `disabled`          | Boolean | `false`       | A Boolean attribute which is present if the input should be disabled           |
| `readonly`          | Boolean | `false`       | A Boolean attribute which, if true, indicates that the select cannot be edited |
| `searchable`        | Boolean | `false`       | A Boolean attribute which, if true, select can be searched                     |
| `invalid`           | Boolean | `false`       | A Boolean which, if true, indicates that the input is valid                    |
| `label`             | String  | `false`       | The input's label                                                              |
| `placeholder`       | String  | `false`       | The input's placeholder text                                                   |
| `loading`           | Boolean | `false`       | Whether or not select is loading                                               |
| `validationMessage` | String  | `false`       | The select's error message                                                     |

## Examples

### Default

```js preview-story
export const Default = () => {
  const placeholder = text("Placeholder", "Please select an option");
  const label = text("Label", "Landmarks");
  const readonly = boolean("Read Only", false);
  const invalid = boolean("Invalid", false);
  const disabled = boolean("Disabled", false);
  const error = text("Error", "");

  return html`
    <chameleon-select
      .options="${options}"
      label="${label}"
      ?readonly="${readonly}"
      placeholder="${placeholder}"
      ?invalid="${invalid}"
      ?disabled="${disabled}"
      validationMessage="${error}"
    >
    </chameleon-select>
  `;
};
```

### Error State

```js preview-story
export const ErrorState = () => html`
  <chameleon-select
    label="Landmarks"
    ?invalid="${true}"
    validationMessage="Please select an option"
  >
  </chameleon-select>
`;
```
