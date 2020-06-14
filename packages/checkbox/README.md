# Chameleon Checkbox

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-checkbox.js";

export default {
  title: "Components|Checkbox",
  component: "chameleon-checkbox",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value    | Description                                                                      |
| ------------- | ------- | ---------------- | -------------------------------------------------------------------------------- |
| `label`       | String  | `""`             | The checkbox's label                                                             |
| `name`        | String  | `"cha-checkbox"` | The checkbox's form name                                                         |
| `checked`     | Boolean | `false`          | A Boolean which, if true, indicates that the checkbox is selected                |
| `value`       | String  | `""`             | The checkbox's current value                                                     |
| `readonly`    | Boolean | `false`          | A Boolean attribute which, if true, indicates that the checkbox cannot be edited |
| `disabled`    | Boolean | `false`          | The checkbox's enabled/disabled status                                           |
| `invalid`     | Boolean | `false`          | Invalid boolean to allow validity access from higher level form errors           |
| `required`    | boolean | `false`          | A Boolean to indicate the input is required                                      |

## Examples

### Default

```js preview-story
export const Default = () => {
  const label = text("Label", "");
  const checked = boolean("Checked", true);
  const disabled = boolean("Disabled", false);
  const invalid = boolean("Invalid", false);

  return html`
    <chameleon-checkbox
      label="${label}"
      ?checked="${checked}"
      ?disabled="${disabled}"
      ?invalid="${invalid}"
    ></chameleon-checkbox>
  `;
};
```
