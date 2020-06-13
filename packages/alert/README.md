# Chameleon Alert

```js script
import { html } from "@open-wc/demoing-storybook";
import "./chameleon-alert.js";

export default {
  title: "Components|Alert",
  component: "chameleon-alert",
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Examples

### Default

```js preview-story
export const Default = () => html`
  <chameleon-alert>
    Riverside cleanup will meet at the Gateway Arch on Saturday!
  </chameleon-alert>
`;
```
