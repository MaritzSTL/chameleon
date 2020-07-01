# Chameleon Card

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import "./chameleon-card.js";
import "./chameleon-card-footer.js";
import "./chameleon-card-header.js";
import "./chameleon-card-image.js";

export default {
  title: "Components|Data and Visualizations/Card",
  component: "chameleon-card",
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: "gray", value: "#f5f5f8", default: true },
      { name: "black", value: "#252a33" },
    ],
  },
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

### chameleon-card

| Property Name  | Type(s) | Default Value | Description                  |
| -------------- | ------- | ------------- | ---------------------------- |
| `accentColor`  | String  | `null`        | The accent color of the card |
| `complication` | String  | `null`        | The complication text        |

### chameleon-card-header

| Property Name | Type(s) | Default Value | Description              |
| ------------- | ------- | ------------- | ------------------------ |
| `title`       | String  | `""`          | The card header title    |
| `subtitle`    | String  | `""`          | The card header subtitle |

### chameleon-card-image

| Property Name | Type(s) | Default Value | Description               |
| ------------- | ------- | ------------- | ------------------------- |
| `src`         | String  | `""`          | The card image's src      |
| `alt`         | String  | `""`          | The card image's alt text |

## Examples

### Default

```js preview-story
export const Default = () => {
  const titleText = text("Title", "St. Louis, MO");
  const subtitleText = text("Subtitle", "Destination");
  const rounded = boolean("Rounded", false);
  const outline = boolean("Outline", false);

  return html`
    <style>
      chameleon-card {
        max-width: 400px;
      }
    </style>

    <chameleon-card ?rounded="${rounded}" ?outline="${outline}">
      <chameleon-card-header
        title="${titleText}"
        subtitle="${subtitleText}"
      ></chameleon-card-header>
      <p>
        St. Louis is a major city in Missouri along the Mississippi River. Its
        iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early
        19th-century explorations of Lewis and Clark and America's westward
        expansion in general. Replica paddlewheelers ply the river, offering
        views of the arch. The Soulard district is home to barbecue restaurants
        and clubs playing blues music.
      </p>
    </chameleon-card>
  `;
};
```

### Image

```js preview-story
export const Image = () => {
  const imageSrc = text(
    "Image Source",
    "https://images.unsplash.com/photo-1474644746397-786f431dc663?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80"
  );
  const altText = text("ALT Text", "St. Louis Landscape");

  return html`
    <style>
      chameleon-card {
        max-width: 400px;
      }
    </style>

    <chameleon-card rounded>
      <chameleon-card-header
        title="St. Louis, MO"
        subtitle="Destination"
      ></chameleon-card-header>
      <chameleon-card-image
        src="${imageSrc}"
        alt="${altText}"
      ></chameleon-card-image>
      <p>
        St. Louis is a major city in Missouri along the Mississippi River. Its
        iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early
        19th-century explorations of Lewis and Clark and America's westward
        expansion in general. Replica paddlewheelers ply the river, offering
        views of the arch. The Soulard district is home to barbecue restaurants
        and clubs playing blues music.
      </p>
    </chameleon-card>
  `;
};
```

### Accent Color

```js preview-story
export const AccentColor = () => {
  const accentColor = text("Accent Color", "");

  return html`
    <style>
      chameleon-card {
        max-width: 400px;
      }
    </style>

    <chameleon-card rounded accentColor="${accentColor}">
      <chameleon-card-header
        title="St. Louis, MO"
        subtitle="Destination"
      ></chameleon-card-header>
      <p>
        St. Louis is a major city in Missouri along the Mississippi River. Its
        iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early
        19th-century explorations of Lewis and Clark and America's westward
        expansion in general. Replica paddlewheelers ply the river, offering
        views of the arch. The Soulard district is home to barbecue restaurants
        and clubs playing blues music.
      </p>
    </chameleon-card>
  `;
};
```

### Footer

```js preview-story
export const Footer = () => html`
  <style>
    chameleon-card {
      max-width: 400px;
    }
  </style>
  <chameleon-card>
    <chameleon-card-header
      title="St. Louis, MO"
      subtitle="Destination"
    ></chameleon-card-header>
    <p>
      St. Louis is a major city in Missouri along the Mississippi River. Its
      iconic, 630-ft. Gateway Arch, built in the 1960s, honors the early
      19th-century explorations of Lewis and Clark and America's westward
      expansion in general. Replica paddlewheelers ply the river, offering views
      of the arch. The Soulard district is home to barbecue restaurants and
      clubs playing blues music.
    </p>
    <chameleon-card-footer>
      <chameleon-button theme="secondary">Button</chameleon-button>
    </chameleon-card-footer>
  </chameleon-card>
`;
```
