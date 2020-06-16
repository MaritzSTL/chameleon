# Chameleon Switch

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-switch.js";

export default {
  title: "Components|Form Elements/Switch",
  component: "chameleon-switch",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                       |
| ------------- | ------- | ------------- | --------------------------------- |
| `label`       | String  | `""`          | The switch's label                |
| `checked`     | Boolean | `false`       | If the switch is checked          |
| `readonly`    | Boolean | `false`       | If the switch's value is readonly |
| `value`       | String  | `""`          | The switch's current value        |

## Examples

### Default

```js preview-story
export const Default = () => {
  const label = text("Label", "");
  const checked = boolean("Checked", true);
  const readonly = boolean("Read Only", false);

  return html`
    <chameleon-switch
      label="${label}"
      ?checked="${checked}"
      ?readonly="${readonly}"
    ></chameleon-switch>
  `;
};
```
