# Chameleon Dialog

```js script
import { html, svg } from "lit-html";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-dialog.js";

export default {
  title: "Components|Overlays/Dialog",
  component: "chameleon-dialog",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                              |
| ------------- | ------- | ------------- | ---------------------------------------- |
| `open`        | Boolean | `false`       | Whether or not the dialog is open        |
| `icon`        | Boolean | `false`       | Whether or not the card has an icon      |
| `dismissible` | Boolean | `false`       | Whether or not the card has a close icon |
| `canGoBack`   | Boolean | `false`       | Whether or not the dialog can go back    |
| `fullScreen`  | Boolean | `false`       | Display full screen                      |

## Examples

### Default

```js preview-story
export const Default = () => {
  const defaultIcon = svg`
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle" slot="icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
  `;

  return html`
    <chameleon-dialog open="true" dismissible="true">
      ${defaultIcon}
      <h1 slot="title">Title</h1>
      We’re sorry but your session has expired. You will need to log back in to
      continue.
      <div slot="accept-action">
        <chameleon-button full-width theme="primary">
          Okay
        </chameleon-button>
      </div>
      <div slot="decline-action">
        <chameleon-button full-width theme="secondary">
          Cancel
        </chameleon-button>
      </div>
    </chameleon-dialog>
  `;
};
```
