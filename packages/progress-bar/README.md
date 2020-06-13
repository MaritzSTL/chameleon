# Chameleon Progress Bar

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, number, text } from "@open-wc/demoing-storybook";
import "./src/chameleon-progress-bar.js";

export default {
  title: "Components|Progress Bar",
  component: "chameleon-progress-bar",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                            |
| ------------- | ------- | ------------- | -------------------------------------- |
| `percent`     | Number  | `undefined`   | The total number of items in all pages |
| `total`       | Number  | `0`           | The amount of pages of items           |
| `completed`   | Number  | `0`           | The multiselect's current page         |
| `label`       | String  | `""`          | The max length of visible pages        |

## Examples

### Default

```js preview-story
export const Default = () => {
  const percent = number("Percent", 75);
  const label = text("Label", "Processing...");

  return html`
    <chameleon-progress-bar percent="${percent}" label="${label}">
    </chameleon-progress-bar>
  `;
};
```
