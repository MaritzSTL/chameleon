# Chameleon Radio

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-radio.js";

export default {
  title: "Components|Form Elements/Radio",
  component: "chameleon-radio",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                                                                          |
| ------------- | ------- | ------------- | ------------------------------------------------------------------------------------ |
| `label`       | String  | `""`          | The radio's label                                                                    |
| `name`        | String  | `"cha-radio"` | The radio's form name                                                                |
| `checked`     | Boolean | `false`       | A Boolean which, if true, indicates that the radio is selected                       |
| `value`       | String  | `""`          | The radio's current value                                                            |
| `disabled`    | Boolean | `false`       | A Boolean to disable radio button                                                    |
| `readonly`    | Boolean | `false`       | A Boolean attribute which, if true, indicates that the radio button cannot be edited |
| `invalid`     | Boolean | `false`       | Invalid boolean to allow validity access from higher level form errors               |

## Examples

### Default

```js preview-story
export const Default = () => {
  const label = text("Label", "");
  const checked = boolean("Checked", true);
  const disabled = boolean("Disabled", false);
  const invalid = boolean("Invalid", false);

  return html`
    <chameleon-radio
      label="${label}"
      ?checked="${checked}"
      ?disabled="${disabled}"
      ?invalid="${invalid}"
    ></chameleon-radio>
  `;
};
```
