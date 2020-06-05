# Chameleon Sheet

## Breaking Changes:

- `v1.x.x` -> `v2.x.x`: Removed `.header`, `.subheader`, added use of `@lion/overlays`.

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

```js
import { sharedCss } from "./shared.css"; // assume webpack processes this into a css tagged-export
const localCss = css``;

return html`
  <chameleon-sheet>
    <span slot="invoker">
      <button>Click me to see the sheet!</button>
    </span>
    <sheet-content .width="${width}" slot="content">
      <style>
        .head-container {
          position: relative;
          padding: 20px;
        }
        ${importedCss}
        ${localCss}
      </style>
    </sheet-content></chameleon-sheet
  >
`;
```

## Understanding Bindings

As stated above, the _entire_ node is moved. This means, any bindings you use when creating it are brought along. For example:

```typescript
import { LitElement, html } from "lit-element";
import "./chameleon-sheet";
import "./sheet-content";

export class BindingTest extends LitElement {
  counter: number;

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <chameleon-sheet>
        <button slot="invoker">Open Bindingtest</button>
        <sheet-content slot="content">
          <p>counter: ${this.counter}</p>
          <button @click="${this.increment}">Add</button>
        </sheet-content>
      </chameleon-sheet>
    `;
  }
}

if (!window.customElements.get("binding-test")) {
  customElements.define("binding-test", BindingTest);
}
```

Even though the slotted content is relocated onto `body`, `${this.counter}` and `${this.increment}` will still refer the values for the instance of `BindingTest`. This provides full interoperability with the declaring `LitElement`.

## Moving from V1 -> V2

You should be able to include your same content, along with the styling it used, as-is inside `sheet-content`.
