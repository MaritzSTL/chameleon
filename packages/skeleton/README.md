# Chameleon Skeleton

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, number } from "@open-wc/demoing-storybook";
import "./chameleon-skeleton.js";

export default {
  title: "Components|Skeleton",
  component: "chameleon-skeleton",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

### chameleon-card

| Property Name | Type(s) | Default Value | Description                                   |
| ------------- | ------- | ------------- | --------------------------------------------- |
| `theme`       | String  | `"primary"`   | The skeleton's theme ("primary", "secondary") |
| `height`      | String  | `"100%"`      | The skeleton's height                         |
| `width`       | String  | `"100%"`      | The skeleton's width                          |
| `cHeight`     | Number  | `50`          | The skeleton's circle height                  |

## Examples

### Default

```js preview-story
export const Default = () => {
  const height = text("Height", "100%");
  const width = text("Width", "100%");
  const theme = text("Theme", "primary");
  const cHeight = number("Circle Height", 50);

  return theme === "primary"
    ? html`
        <chameleon-skeleton theme="primary" height="${height}" width="${width}">
        </chameleon-skeleton>
      `
    : theme === "secondary"
    ? html` <chameleon-skeleton theme="secondary" cHeight="${cHeight}">
      </chameleon-skeleton>`
    : "";
};
```
