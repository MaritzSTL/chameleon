# Chameleon Button

```js script
import { html, svg } from "lit-html";
import "./chameleon-button.js";

export default {
  title: "Components|Button",
  component: "chameleon-button",
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name | Type(s) | Default Value | Description                                                 |
| ------------- | ------- | ------------- | ----------------------------------------------------------- |
| `disabled`    | Boolean | `false`       | Whether or not the button is disabled                       |
| `loading`     | Boolean | `false`       | When true, a loading spinner will display                   |
| `theme`       | String  | `"primary"`   | The theme of the button ("primary", "secondary", or "text") |
| `icon-left`   | Boolean | `false`       | When true, will display a left icon                         |
| `icon-right`  | Boolean | `false`       | When true, will display a right icon                        |
| `icon-only`   | Boolean | `false`       | When true, will display only an icon                        |
| `href`        | String  | `null`        | The link href                                               |
| `target`      | String  | `"_top"`      | The link target                                             |

## Examples

### Default

```js preview-story
export const Default = () => html`<chameleon-button>Login</chameleon-button>`;
```

### Secondary Theme

```js preview-story
export const SecondaryTheme = () =>
  html`<chameleon-button theme="secondary">Login</chameleon-button>`;
```

### Text Theme

```js preview-story
export const TextTheme = () =>
  html`<chameleon-button theme="text">Login</chameleon-button>`;
```

### Text with Icon

```js preview-story
const heartIconLeft = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart" slot="icon-left"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

export const TextWithIcon = () =>
  html`<chameleon-button theme="text" icon-left
    >${heartIconLeft} Love</chameleon-button
  >`;
```

### Icon Only

```js preview-story
const heartIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart" slot="icon-left"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

export const IconOnly = () =>
  html`<chameleon-button theme="text" icon-only
    >${heartIcon}</chameleon-button
  >`;
```
