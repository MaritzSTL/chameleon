# Chameleon Loader

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text } from "@open-wc/demoing-storybook";
import "./src/chameleon-loader.js";

export default {
  title: "Components|Loader",
  component: "chameleon-loader",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                                |
| ------------- | ------- | ------------- | ------------------------------------------ |
| `loader`      | String  | `"spinner"`   | The loader's style ("spinner", "ellipsis") |
| `size`        | String  | `"auto"`      | The loader's size                          |

## Examples

### Default

```js preview-story
export const Default = () => {
  const size = text("Size", "21px");

  return html`
    <chameleon-loader loader="spinner" size="${size}"></chameleon-loader>
  `;
};
```

### Ellipsis

```js preview-story
export const Ellipsis = () => html`
  <chameleon-loader loader="ellipsis"></chameleon-loader>
`;
```
