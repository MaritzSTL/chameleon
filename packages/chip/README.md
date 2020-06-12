# Chameleon Chip

```js script
import { html } from "@open-wc/demoing-storybook";
import "./src/chameleon-chip.js";

export default {
  title: "Components|Chip",
  component: "chameleon-chip",
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                           |
| ------------- | ------- | ------------- | ------------------------------------- |
| `closeable`   | Boolean | `false`       | Whether or not the chip can be closed |
| `value`       | String  | `""`          | The chip's value                      |

## Examples

### Default

```js preview-story
export const Default = () => html` <chameleon-chip>Filter</chameleon-chip> `;
```

### Closeable

```js preview-story
export const Closeable = () => html`
  <chameleon-chip closeable>Filter</chameleon-chip>
`;
```
