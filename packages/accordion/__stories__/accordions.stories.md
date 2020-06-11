```js script
import { html } from "@open-wc/demoing-storybook";
import "../src/index.js";

export default {
  title: "Accordions",
  component: "chameleon-accordions",
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Chameleon Accordions

```js story
export const Simple = () => html`
  <chameleon-accordions>
    <chameleon-accordion><h4 slot="header">One</h4></chameleon-accordion>
    <chameleon-accordion><h4 slot="header">Two</h4></chameleon-accordion>
    <chameleon-accordion><h4 slot="header">Three</h4></chameleon-accordion>
  </chameleon-accordions>
`;
```
