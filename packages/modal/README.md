# Chameleon Modal

```js script
import { html } from "@open-wc/demoing-storybook";
import "./src/chameleon-modal.js";

export default {
  title: "Components|Modal",
  component: "chameleon-modal",
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                                 |
| ------------- | ------- | ------------- | ------------------------------------------- |
| `open`        | Boolean | `false`       | If the modal is open                        |
| `dismissible` | Boolean | `false`       | If the modal is dismissible                 |
| `fullScreen`  | Boolean | `false`       | Whether or not the modal appears fullscreen |

## Examples

### Default

```js preview-story
export const Default = () => html`
  <chameleon-modal open="true" dismissible="true">
    <h3 slot="title">Contact Form</h3>
    <div slot="body">
      <chameleon-input label="First Name"></chameleon-input>
      <chameleon-input label="Last Name"></chameleon-input>
      <chameleon-input type="email" label="Email"></chameleon-input>
    </div>
    <chameleon-button theme="text" slot="left-button">
      Cancel
    </chameleon-button>
    <chameleon-button theme="primary" slot="right-button">
      Continue
    </chameleon-button>
  </chameleon-modal>
`;
```
