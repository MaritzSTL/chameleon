# Chameleon Tabs

```js script
import { html } from "@open-wc/demoing-storybook";
import "./chameleon-tab.js";
import "./chameleon-tabs.js";

export default {
  title: "Components|Navigation/Tabs",
  component: "chameleon-tabs",
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

### chameleon-tabs

| Property Name | Type(s) | Default Value | Description                                                    |
| ------------- | ------- | ------------- | -------------------------------------------------------------- |
| `urlRewrite`  | Boolean | `true`        | Automatically rewrite URL with tab index information when true |
| `selected`    | Number  | `0`           | The selected tab's index                                       |

## Examples

### Default

```js preview-story
export const Default = () => html`
  <chameleon-tabs selected="0">
    <chameleon-tab>
      Tab One
    </chameleon-tab>
    <chameleon-tab>
      Tab Two
    </chameleon-tab>
    <chameleon-tab>
      Tab Three
    </chameleon-tab>
  </chameleon-tabs>
`;
```
