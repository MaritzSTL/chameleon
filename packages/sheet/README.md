# Chameleon Sheet

```js script
import { html } from "@open-wc/demoing-storybook";
import { withKnobs, text } from "@open-wc/demoing-storybook";
import "./chameleon-sheet.js";
import "./sheet-content.js";

export default {
  title: "Components|Overlays/Sheet",
  component: "chameleon-sheet",
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: "gray", value: "#f5f5f8", default: true },
      { name: "black", value: "#252a33" },
    ],
  },
  options: { selectedPanel: "storybookjs/dovs/panel" },
};
```

## Properties

### chameleon-card

| Property Name         | Type(s) | Default Value | Description                                       |
| --------------------- | ------- | ------------- | ------------------------------------------------- |
| `trapsKeyboardFocus`  | Boolean | `true`        | Whether or not the sheet will trap keyboard focus |
| `hasBackdrop`         | Boolean | `true`        | If the sheet has an overlay backdrop              |
| `hidesOnOutsideClick` | Boolean | `true`        | If the sheet hides when clicked outside of        |
| `hidesOnEsc`          | Boolean | `true`        | If the sheet hides when the ESC key is pressed    |
| `preventsScroll`      | Boolean | `true`        | If the sheet prevents page scrolling when open    |

### sheet-content

| Property Name | Type(s) | Default Value | Description               |
| ------------- | ------- | ------------- | ------------------------- |
| `dismissable` | Boolean | `true`        | The card header title     |
| `width`       | String  | `"320px"`     | The sheet content's width |

## How the Sheet Works

`chameleon-sheet` now uses [@lion/overlays](https://github.com/ing-bank/lion/tree/master/packages/overlays) to power behavior. This lets us keep an extremely simple, declaratively composed approach:

```html
<chameleon-sheet>
  <button slot="invoker">Open Sheet</button>
  <p slot="content">Your content here!</p>
</chameleon-sheet>
```

There are now just two slots to understand:

- the `invoker` slot is the content a user interacts with in order to open the sheet (for example the enticing "..." icon inside a table row).
- the `content` slot is the content which shows inside the sheet. If you want something to show up in the sheet, throw it in here.

The `content` node itself is moved outside Chameleon Sheet's shadow dom, and relocated top-level onto `document.body`. This lets us ensure people can see it/interact with it, that it's accessible, and other reasons.

How do we ensure relocated content doesn't leak styles, while still getting all the benefits of our existing system? Simple! - build the content that should be relocated as it's own custom element. This lets us relocate a single node, and maintain full encapsulation of styles.

To streamline this, there's another component made available: `sheet-content`. You don't have to use `sheet-content`, you can put whatever you'd like into `chameleon-sheet`. However, `sheet-content` streamlines the look and feel of `chameleon-sheet` to be like v1, with some other enhancements:

- You can customize the `width` (to set it, for example to '75vw' for a "big sheet").
- You can apply other instance-specific styling to each component by specifying local `<style>`'s.

## Understanding Bindings

As stated above, the _entire_ node is moved. This means, any bindings you use when creating it are brought along.

## Breaking Changes:

- `v1.x.x` -> `v2.x.x`: Removed `.header`, `.subheader`, added use of `@lion/overlays`.

## Migrating from V1 -> V2

You should be able to include your same content, along with the styling it used, as-is inside `sheet-content`.

## Examples

### Default

```js preview-story
export const Default = () => {
  const width = text("Width", "320px");

  return html`
    <chameleon-sheet>
      <span slot="invoker">
        <button>Standard Sheet</button>
      </span>
      <sheet-content slot="content" width="${width}">
        <style>
          section {
            padding: 20px;
            font-size: 0.938rem;
          }

          .divider-top {
            border-top: solid 2px #e1e3e4;
          }

          .divider-bottom {
            border-bottom: solid 2px #e1e3e4;
          }

          .header {
            font-family: var(--app-heading-font, sans-serif);
            color: var(--primary-color, #2c6fb7);
            font-size: 1.4rem;
            font-weight: 400;
            margin-top: 0;
          }

          .sub-header {
            display: block;
            font-family: var(--app-heading-font, sans-serif);
            color: var(--primary-color, #2c6fb7);
            letter-spacing: normal;
            line-height: 21px;
            font-size: 18px;
            font-weight: 400;
          }

          label,
          .label {
            font-family: var(--app-body-font, Arial);
            color: var(--gray-darkest, #6c737a);
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0;
            margin-bottom: 8px;
            display: block;
          }
        </style>
        <section>
          <h1 class="header">Header</h1>
          <h2 class="sub-header">Subheader</h1>
        </section>
        <section class="divider-top">
          <p>City: Saint Louis</p>
          <p>Parks: Forest Park</p>
        </section>
        <section class="divider-top">
          <p>Food: Blue Ocean Sushi</p>
          <p>Art: Saint Louis Art Gallery</p>
        </section>
        <section class="divider-top divider-bottom">
          <p>Hockey: Blues</p>
          <p>Baseball: Cards</p>
          <p>Famous People: Nelly</p>
        </section>
      </sheet-content>
    </chameleon-sheet>
  `;
};
```
