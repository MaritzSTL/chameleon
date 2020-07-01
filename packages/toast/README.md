# Chameleon Toast

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-toast.js";

export default {
  title: "Components|Overlays/Toast",
  component: "chameleon-toast",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

## Properties

| Property Name     | Type(s) | Default Value | Description                            |
| ----------------- | ------- | ------------- | -------------------------------------- |
| `color`           | String  | `color`       | The toast's color                      |
| `showCloseable`   | Boolean | `true`        | Whether or not the toast can be closed |
| `backgroundColor` | String  | `null`        | The toast's background color           |

## Examples

### Default

```js preview-story
export const Default = () => {
  const color = text("Color", "");
  const backgroundColor = text("Background Color", "");
  const showCloseable = boolean("Show", true);
  const imageUrl = text(
    "Image Url",
    "https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=6&m=517109442&s=612x612&w=0&h=NvQ5y8ENWZvpr84vEFWmxUgV2rCgtOGEsjJXa3IYsZ4="
  );
  const toastText = text(
    "Text",
    "This website uses cookies to remember you and improve your experience. By using our site, you accept our use of cookies."
  );

  return html`
    <chameleon-toast
      color="${color}"
      backgroundColor="${backgroundColor}"
      ?showCloseable="${showCloseable}"
    >
      <span slot="toast-text">${toastText}</span>
      <img slot="close-icon" src="${imageUrl}" />
    </chameleon-toast>
  `;
};
```
