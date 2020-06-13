# Chameleon Chart

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, number } from "@open-wc/demoing-storybook";
import "./chameleon-chart.js";

export default {
  title: "Components|Chart",
  component: "chameleon-chart",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                                 |
| ------------- | ------- | ------------- | ------------------------------------------- |
| `type`        | String  | `""`          | The type of chart                           |
| `color`       | String  | `"#00870a"`   | The hex value of the chart color            |
| `percentage`  | Number  | `0`           | The percentage to be displayed in the chart |
| `label`       | String  | `"0"`         | The value to show in the label              |
| `subLabel`    | String  | `""`          | The value to show in the sublabel           |

## Examples

### Default

```js preview-story
export const Default = () => {
  const color = text("Color", "#00870a");
  const label = text("Label", "1,000");
  const subLabel = text("SubLabel", "Funds Remaining");
  const percentage = number("Percentage", 90);

  return html`
    <chameleon-chart
      color="${color}"
      percentage="${percentage}"
      label="${label}"
      subLabel="${subLabel}"
      type="arc"
    ></chameleon-chart>
  `;
};
```
