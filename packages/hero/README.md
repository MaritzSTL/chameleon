# Chameleon Hero

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, number } from "@open-wc/demoing-storybook";
import "./chameleon-hero.js";

export default {
  title: "Components|Layout/Hero",
  component: "chameleon-hero",
  decorators: [withKnobs],
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name   | Type(s) | Default Value                                            | Description                             |
| --------------- | ------- | -------------------------------------------------------- | --------------------------------------- |
| `title`         | String  | `""`                                                     | The hero's title                        |
| `subTitle`      | String  | `""`                                                     | The hero's subtitle                     |
| `heroText`      | String  | `""`                                                     | The text of the hero                    |
| `imageUrl`      | String  | `""`                                                     | The hero's image url                    |
| `type`          | String  | `"gradient"`                                             | The hero type                           |
| `gradient`      | String  | `var(--color-primary-dark), var(--color-secondary-dark)` | The hero's gradient value               |
| `gradientAlpha` | Number  | `0.5`                                                    | The hero's gradient alpha value         |
| `loading`       | Boolean | `false`                                                  | Whether or not the hero appears loading |

## Examples

### Default

```js preview-story
export const Default = () => {
  const title = text("Title", "St. Louis, MO");
  const subtitle = text("Subtitle", "Destination");
  const heroText = text(
    "Text",
    "St. Louis is a major city in Missouri along the Mississippi River. Its iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early 19th-century explorations of Lewis and Clark and America's westward expansion in general. Replica paddlewheelers ply the river, offering views of the arch. The Soulard district is home to barbecue restaurants and clubs playing blues music."
  );
  const gradientColors = text("Hex Colors", "#B72126, #14264B");

  return html`
    <chameleon-hero
      title="${title}"
      subTitle="${subtitle}"
      heroText="${heroText}"
      gradient="${gradientColors}"
    >
    </chameleon-hero>
  `;
};
```

### Background Image

```js preview-story
export const BackgroundImage = () => {
  const imageUrl = text("Image URL", "https://picsum.photos/id/122/2100/856");

  return html`
    <chameleon-hero
      title="St. Louis, MO"
      subTitle="Destination"
      heroText="St. Louis is a major city in Missouri along the Mississippi River. Its iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early 19th-century explorations of Lewis and Clark and America's westward expansion in general. Replica paddlewheelers ply the river, offering views of the arch. The Soulard district is home to barbecue restaurants and clubs playing blues music."
      imageUrl="${imageUrl}"
      type="image"
    >
    </chameleon-hero>
  `;
};
```

### Image Gradient

```js preview-story
export const ImageGradient = () => {
  const imageUrl = text("Image URL", "https://picsum.photos/id/703/2100/856");
  const gradientColors = text("Hex Colors", "#B72126, #14264B");
  const gradientAlpha = number("Gradient Alpha", 0.5);

  return html`
    <chameleon-hero
      title="St. Louis, MO"
      subTitle="Destination"
      heroText="St. Louis is a major city in Missouri along the Mississippi River. Its iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early 19th-century explorations of Lewis and Clark and America's westward expansion in general. Replica paddlewheelers ply the river, offering views of the arch. The Soulard district is home to barbecue restaurants and clubs playing blues music."
      imageUrl="${imageUrl}"
      type="image-gradient"
      gradient="${gradientColors}"
      gradientAlpha="${gradientAlpha}"
    >
    </chameleon-hero>
  `;
};
```
