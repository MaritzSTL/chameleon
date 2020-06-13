# Chameleon Pagniator

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, number } from "@open-wc/demoing-storybook";
import "./chameleon-paginator.js";

export default {
  title: "Components|Paginator",
  component: "chameleon-paginator",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                            |
| ------------- | ------- | ------------- | -------------------------------------- |
| `totalItems`  | Number  | `null`        | The total number of items in all pages |
| `pageSize`    | Number  | `null`        | The amount of pages of items           |
| `currentPage` | Number  | `1`           | The multiselect's current page         |
| `maxLength`   | Number  | `7`           | The max length of visible pages        |
| `separator`   | String  | `"..."`       | The separator for skipped pages        |

## Examples

### Default

```js preview-story
export const Default = () => {
  const totalItems = number("Total Items", 100);
  const pageSize = number("Page Size", 10);

  return html`
    <chameleon-paginator
      totalItems="${totalItems ? totalItems : 0}"
      pageSize="${pageSize ? pageSize : 0}"
    ></chameleon-paginator>
  `;
};
```
