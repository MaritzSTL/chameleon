# Chameleon Date

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-date.js";

export default {
  title: "Components|Form Elements/Date",
  component: "chameleon-date",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name       | Type(s) | Default Value | Description                                      |
| ------------------- | ------- | ------------- | ------------------------------------------------ |
| `name`              | String  | `"cha-date"`  | The date's form name                             |
| `active`            | Boolean | `false`       | Whether or not the date picker drawer is open    |
| `renderedDate`      | Object  | `null`        | The Date object of the rendered date             |
| `placeholder`       | String  | `""`          | The date's placeholder text                      |
| `label`             | String  | `""`          | The date's label text                            |
| `readonly`          | Boolean | `false`       | Whether or not the date picker is readonly       |
| `value`             | String  | `""`          | The date picker's text value (YYYY-MM-DD)        |
| `min`               | String  | `null`        | The date picker's minimum value (YYYY-MM-DD)     |
| `max`               | String  | `null`        | The date picker's maximum value (YYYY-MM-DD)     |
| `required`          | Boolean | `false`       | Whether or not the date value is required        |
| `canDelete`         | Boolean | `true`        | If the date is able to be deleted                |
| `disabled`          | Boolean | `false`       | Whether or not the date picker is disabled       |
| `validationMessage` | String  | `""`          | The date picker's validation message             |
| `invalid`           | Boolean | `false`       | Whether or not the date picker is invalid        |
| `overlayRenderMode` | String  | `"month"`     | The date picker's overlay mode ("year", "month") |

## Examples

### Default

```js preview-story
export const Default = () => {
  const placeholder = text("Placeholder", "Select Date");
  const label = text("Label", "Date *");
  const minValue = text("Min Value (YYYY-MM-DD)", "");
  const maxValue = text("Max Value (YYYY-MM-DD)", "");
  const readonly = boolean("Read Only", false);
  const invalid = boolean("Invalid", false);
  const required = boolean("Required", false);
  const disabled = boolean("Disabled", false);
  const error = text("Error", "");
  const name = text("Name", "input-form-name");

  return html`
    <chameleon-date
      name="${name}"
      .placeholder="${placeholder}"
      ?readonly="${readonly}"
      .label="${label}"
      .min="${minValue}"
      .max="${maxValue}"
      ?required="${required}"
      ?invalid="${invalid}"
      ?disabled="${disabled}"
      .validationMessage="${error}"
    ></chameleon-date>
  `;
};
```

### Error State

```js preview-story
export const ErrorState = () => html`
  <chameleon-date
    placeholder="Select Date"
    label="Date *"
    invalid="true"
    validationMessage="Date must be selected"
  ></chameleon-date>
`;
```
